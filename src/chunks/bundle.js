System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/index.mjs", ['./rollupPluginModLoBabelHelpers.js'], function (exports) {
  var _createForOfIteratorHelperLoose, _extends, _createClass, _inheritsLoose, _asyncToGenerator, _regeneratorRuntime;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }],
    execute: function () {
      exports({
        BlackboardValueType: void 0,
        ErrorLevel: void 0,
        LogLevel: void 0,
        TaskStatus: void 0
      });
      var _Logger$_levelNames, _Logger$_levelStyles;
      /**
       * @esengine/ai v2.0.28
       * 高性能TypeScript AI系统库 - 行为树、实用AI和有限状态机
       * 
       * @author yhh
       * @license MIT
       */
      /**
       * 高性能伪随机数生成器
       * 使用xorshift128算法，比原生Math.random()更快且质量更好
       *
       * @example
       * ```typescript
       * // 设置种子（可选，默认使用当前时间）
       * Random.setSeed(12345);
       *
       * // 生成0-1之间的随机数
       * const value = Random.value();
       *
       * // 生成指定范围的随机数
       * const rangeValue = Random.range(10, 20);
       *
       * // 生成随机整数
       * const intValue = Random.integer(1, 100);
       *
       * // 随机布尔值
       * const bool = Random.boolean();
       *
       * // 带概率的布尔值
       * const probBool = Random.chance(0.7); // 70%概率返回true
       * ```
       */
      var Random = exports('Random', /*#__PURE__*/function () {
        function Random() {}
        /**
         * 设置随机数种子
         * @param seed 种子值，如果不提供则使用当前时间
         */
        Random.setSeed = function setSeed(seed) {
          if (seed === undefined) {
            seed = Date.now();
          }
          // 使用种子初始化四个状态变量
          this._x = seed >>> 0;
          this._y = seed * 1812433253 + 1 >>> 0;
          this._z = this._y * 1812433253 + 1 >>> 0;
          this._w = this._z * 1812433253 + 1 >>> 0;
          // 确保所有状态变量都非零
          if (this._x === 0) this._x = 1;
          if (this._y === 0) this._y = 1;
          if (this._z === 0) this._z = 1;
          if (this._w === 0) this._w = 1;
          this._initialized = true;
          // 预热生成器
          for (var i = 0; i < 10; i++) {
            this.next();
          }
        }
        /**
         * 生成下一个32位无符号整数（内部使用）
         * 使用xorshift128算法
         */;
        Random.next = function next() {
          if (!this._initialized) {
            this.setSeed();
          }
          var t = this._x ^ this._x << 11;
          this._x = this._y;
          this._y = this._z;
          this._z = this._w;
          this._w = this._w ^ this._w >>> 19 ^ (t ^ t >>> 8);
          return this._w >>> 0; // 确保返回无符号32位整数
        }
        /**
         * 生成0到1之间的随机浮点数（不包括1）
         * @returns 0 <= value < 1的随机数
         */;
        Random.value = function value() {
          return this.next() / 0x100000000; // 2^32
        }
        /**
         * 生成指定范围内的随机浮点数
         * @param min 最小值（包含）
         * @param max 最大值（不包含）
         * @returns min <= value < max的随机数
         */;
        Random.range = function range(min, max) {
          if (min === void 0) {
            min = 0;
          }
          if (max === void 0) {
            max = 1;
          }
          if (min >= max) {
            throw new Error("\u6700\u5C0F\u503C(" + min + ")\u5FC5\u987B\u5C0F\u4E8E\u6700\u5927\u503C(" + max + ")");
          }
          return min + (max - min) * this.value();
        }
        /**
         * 生成指定范围内的随机整数
         * @param min 最小值（包含）
         * @param max 最大值（包含）
         * @returns min <= value <= max的随机整数
         */;
        Random.integer = function integer(min, max) {
          if (!Number.isInteger(min) || !Number.isInteger(max)) {
            throw new Error('最小值和最大值必须是整数');
          }
          if (min > max) {
            throw new Error("\u6700\u5C0F\u503C(" + min + ")\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u6700\u5927\u503C(" + max + ")");
          }
          return Math.floor(this.range(min, max + 1));
        }
        /**
         * 生成随机布尔值
         * @returns 随机的true或false
         */;
        Random["boolean"] = function boolean() {
          return this.value() < 0.5;
        }
        /**
         * 根据概率生成布尔值
         * @param probability 返回true的概率（0-1之间）
         * @returns 根据概率返回的布尔值
         */;
        Random.chance = function chance(probability) {
          if (probability < 0 || probability > 1) {
            throw new Error("\u6982\u7387\u503C\u5FC5\u987B\u57280-1\u4E4B\u95F4\uFF0C\u5F53\u524D\u503C: " + probability);
          }
          return this.value() < probability;
        }
        /**
         * 从数组中随机选择一个元素
         * @param array 要选择的数组
         * @returns 随机选中的元素
         */;
        Random.choice = function choice(array) {
          if (array.length === 0) {
            throw new Error('数组不能为空');
          }
          var index = this.integer(0, array.length - 1);
          return array[index]; // 使用非空断言，因为我们已经检查了数组长度
        }
        /**
         * 从数组中随机选择多个不重复的元素
         * @param array 要选择的数组
         * @param count 选择的数量
         * @returns 随机选中的元素数组
         */;
        Random.sample = function sample(array, count) {
          if (count < 0 || count > array.length) {
            throw new Error("\u9009\u62E9\u6570\u91CF(" + count + ")\u5FC5\u987B\u57280-" + array.length + "\u4E4B\u95F4");
          }
          if (count === 0) {
            return [];
          }
          if (count === array.length) {
            return [].concat(array);
          }
          // 对于小的选择数量，使用Set避免重复
          if (count <= array.length / 2) {
            var result = [];
            var indices = new Set();
            while (result.length < count) {
              var _index = this.integer(0, array.length - 1);
              if (!indices.has(_index)) {
                indices.add(_index);
                result.push(array[_index]);
              }
            }
            return result;
          } else {
            // 对于大的选择数量，使用Fisher-Yates洗牌算法的部分版本
            var shuffled = [].concat(array);
            for (var i = 0; i < count; i++) {
              var j = this.integer(i, shuffled.length - 1);
              var _ref = [shuffled[j], shuffled[i]];
              shuffled[i] = _ref[0];
              shuffled[j] = _ref[1];
            }
            return shuffled.slice(0, count);
          }
        }
        /**
         * 生成符合正态分布的随机数（Box-Muller变换）
         * @param mean 均值
         * @param standardDeviation 标准差
         * @returns 符合正态分布的随机数
         */;
        Random.gaussian = function gaussian(mean, standardDeviation) {
          if (mean === void 0) {
            mean = 0;
          }
          if (standardDeviation === void 0) {
            standardDeviation = 1;
          }
          // 使用Box-Muller变换生成正态分布随机数
          var u1 = this.value();
          var u2 = this.value();
          var z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
          return z0 * standardDeviation + mean;
        }
        /**
         * 获取当前随机数生成器的状态（用于保存/恢复）
         * @returns 生成器状态对象
         */;
        Random.getState = function getState() {
          if (!this._initialized) {
            this.setSeed();
          }
          return {
            x: this._x,
            y: this._y,
            z: this._z,
            w: this._w
          };
        }
        /**
         * 恢复随机数生成器的状态
         * @param state 要恢复的状态对象
         */;
        Random.setState = function setState(state) {
          this._x = state.x;
          this._y = state.y;
          this._z = state.z;
          this._w = state.w;
          this._initialized = true;
        };
        return Random;
      }());
      Random._x = 123456789;
      Random._y = 362436069;
      Random._z = 521288629;
      Random._w = 88675123;
      Random._initialized = false;

      /**
       * 数组扩展器和高效数据结构工具
       * 提供栈、队列等数据结构的高效实现
       */
      var ArrayExt = exports('ArrayExt', /*#__PURE__*/function () {
        function ArrayExt() {}
        /**
         * 将数组打乱顺序（Fisher-Yates洗牌算法）
         * 时间复杂度: O(n)，空间复杂度: O(1)
         *
         * @param list 要打乱的数组
         * @throws {Error} 当数组为null或undefined时抛出错误
         */
        ArrayExt.shuffle = function shuffle(list) {
          if (!list) {
            throw new Error('数组不能为null或undefined');
          }
          // 优化：从后往前遍历，减少一次减法运算
          for (var i = list.length - 1; i > 0; i--) {
            var j = Random.integer(0, i);
            // 使用解构赋值进行交换，更简洁
            var _ref2 = [list[j], list[i]];
            list[i] = _ref2[0];
            list[j] = _ref2[1];
          }
        }
        /**
         * 取出数组第一个项（不移除）
         * @param list 目标数组
         * @returns 第一个元素
         * @throws {Error} 当数组为空时抛出错误
         */;
        ArrayExt.peek = function peek(list) {
          if (list.length === 0) {
            throw new Error('无法从空数组中获取元素');
          }
          return list[0];
        }
        /**
         * 向数组头部添加一个项
         * @param list 目标数组
         * @param item 要添加的项
         */;
        ArrayExt.unshift = function unshift(list, item) {
          list.unshift(item);
        }
        /**
         * 移除数组第一个项并返回它
         * @param list 目标数组
         * @returns 移除的元素，如果数组为空则返回undefined
         */;
        ArrayExt.pop = function pop(list) {
          return list.shift();
        }
        /**
         * 向数组尾部添加一个项
         * @param list 目标数组
         * @param item 要添加的项
         */;
        ArrayExt.append = function append(list, item) {
          list.push(item);
        }
        /**
         * 移除数组最后一个项并返回它
         * @param list 目标数组
         * @returns 移除的元素，如果数组为空则返回undefined
         */;
        ArrayExt.removeLast = function removeLast(list) {
          return list.pop();
        }
        /**
         * 检查数组是否为空
         * @param list 目标数组
         * @returns 是否为空
         */;
        ArrayExt.isEmpty = function isEmpty(list) {
          return list.length === 0;
        }
        /**
         * 获取数组大小
         * @param list 目标数组
         * @returns 数组长度
         */;
        ArrayExt.size = function size(list) {
          return list.length;
        }
        /**
         * 清空数组
         * @param list 目标数组
         */;
        ArrayExt.clear = function clear(list) {
          list.length = 0;
        };
        return ArrayExt;
      }());

      /**
       * 日志级别枚举
       */
      var LogLevel;
      (function (LogLevel) {
        /** 调试信息 */
        LogLevel[LogLevel["Debug"] = 0] = "Debug";
        /** 一般信息 */
        LogLevel[LogLevel["Info"] = 1] = "Info";
        /** 警告信息 */
        LogLevel[LogLevel["Warn"] = 2] = "Warn";
        /** 错误信息 */
        LogLevel[LogLevel["Error"] = 3] = "Error";
        /** 关闭日志 */
        LogLevel[LogLevel["None"] = 4] = "None";
      })(LogLevel || (LogLevel = exports('LogLevel', {})));
      ({
        minLevel: LogLevel.Debug,
        enableTimestamp: true,
        enableStackTrace: true,
        performanceMode: false,
        prefix: ''
      });
      /** 日志级别名称映射 */
      _Logger$_levelNames = {}, _Logger$_levelNames[LogLevel.Debug] = 'DEBUG', _Logger$_levelNames[LogLevel.Info] = 'INFO', _Logger$_levelNames[LogLevel.Warn] = 'WARN', _Logger$_levelNames[LogLevel.Error] = 'ERROR', _Logger$_levelNames[LogLevel.None] = 'NONE', _Logger$_levelNames;
      /** 日志级别样式映射（用于浏览器控制台） */
      _Logger$_levelStyles = {}, _Logger$_levelStyles[LogLevel.Debug] = 'color: #888', _Logger$_levelStyles[LogLevel.Info] = 'color: #007acc', _Logger$_levelStyles[LogLevel.Warn] = 'color: #ff8c00', _Logger$_levelStyles[LogLevel.Error] = 'color: #ff4444; font-weight: bold', _Logger$_levelStyles[LogLevel.None] = '', _Logger$_levelStyles;
      /**
       * 全局时间管理器
       *
       * @description
       * 提供高性能的时间管理功能，减少重复的时间计算开销。
       * 使用时间池化技术，在每帧开始时统一计算时间，避免多次调用performance.now()。
       *
       * @example
       * ```typescript
       * // 在游戏主循环开始时更新时间
       * TimeManager.updateFrame();
       *
       * // 获取当前时间（无额外计算开销）
       * const currentTime = TimeManager.getCurrentTime();
       * const deltaTime = TimeManager.getDeltaTime();
       *
       * // 配置时间管理器
       * TimeManager.configure({
       *   maxDeltaTime: 0.1,
       *   timeScale: 1.0,
       *   useHighPrecision: true
       * });
       * ```
       */
      var TimeManager = exports('TimeManager', /*#__PURE__*/function () {
        function TimeManager() {}
        /**
         * 配置时间管理器
         * @param config 配置选项
         */
        TimeManager.configure = function configure(config) {
          if (config.maxDeltaTime !== undefined) {
            this._maxDeltaTime = Math.max(0.001, config.maxDeltaTime);
          }
          if (config.timeScale !== undefined) {
            this._timeScale = Math.max(0, config.timeScale);
          }
          if (config.useHighPrecision !== undefined) {
            this._useHighPrecision = config.useHighPrecision;
          }
        }
        /**
         * 初始化时间管理器
         */;
        TimeManager.initialize = function initialize() {
          if (this._initialized) {
            return;
          }
          var now = this._getSystemTime();
          this._startTime = now;
          this._currentTime = 0;
          this._lastTime = 0;
          this._deltaTime = 0;
          this._unscaledDeltaTime = 0;
          this._frameCount = 0;
          this._initialized = true;
        }
        /**
         * 更新帧时间（应在每帧开始时调用）
         * @param externalDeltaTime 可选的外部提供的时间差
         */;
        TimeManager.updateFrame = function updateFrame(externalDeltaTime) {
          if (!this._initialized) {
            this.initialize();
          }
          this._frameCount++;
          if (externalDeltaTime !== undefined) {
            // 使用外部提供的时间差
            this._unscaledDeltaTime = Math.max(0, externalDeltaTime);
          } else {
            // 计算系统时间差
            var systemTime = this._getSystemTime();
            var currentSystemTime = (systemTime - this._startTime) / 1000;
            if (this._frameCount === 1) {
              // 第一帧，设置初始时间
              this._lastTime = currentSystemTime;
              this._unscaledDeltaTime = 0; // 第一帧时间差为0
            } else {
              this._unscaledDeltaTime = currentSystemTime - this._lastTime;
              this._lastTime = currentSystemTime; // 更新lastTime为当前系统时间
            }
          }
          // 限制最大时间差，防止时间跳跃
          this._unscaledDeltaTime = Math.min(this._unscaledDeltaTime, this._maxDeltaTime);
          // 应用时间缩放
          this._deltaTime = this._unscaledDeltaTime * this._timeScale;
          // 更新当前时间
          this._currentTime += this._deltaTime;
          // 触发时间更新回调
          this._triggerUpdateCallbacks();
        }
        /**
         * 获取系统时间（毫秒）
         */;
        TimeManager._getSystemTime = function _getSystemTime() {
          return this._useHighPrecision ? performance.now() : Date.now();
        }
        /**
         * 触发时间更新回调
         */;
        TimeManager._triggerUpdateCallbacks = function _triggerUpdateCallbacks() {
          for (var i = 0; i < this._updateCallbacks.length; i++) {
            try {
              this._updateCallbacks[i](this._deltaTime);
            } catch (error) {
              console.error('时间更新回调执行失败:', error);
            }
          }
        }
        /**
         * 获取当前时间（秒）
         * @returns 从初始化开始的累计时间
         */;
        TimeManager.getCurrentTime = function getCurrentTime() {
          return this._currentTime;
        }
        /**
         * 获取帧间时间差（秒）
         * @returns 当前帧与上一帧的时间差
         */;
        TimeManager.getDeltaTime = function getDeltaTime() {
          return this._deltaTime;
        }
        /**
         * 获取未缩放的帧间时间差（秒）
         * @returns 未应用时间缩放的帧间时间差
         */;
        TimeManager.getUnscaledDeltaTime = function getUnscaledDeltaTime() {
          return this._unscaledDeltaTime;
        }
        /**
         * 获取时间缩放比例
         */;
        TimeManager.getTimeScale = function getTimeScale() {
          return this._timeScale;
        }
        /**
         * 设置时间缩放比例
         * @param scale 缩放比例，0表示暂停，1表示正常速度
         */;
        TimeManager.setTimeScale = function setTimeScale(scale) {
          this._timeScale = Math.max(0, scale);
        }
        /**
         * 获取帧计数
         */;
        TimeManager.getFrameCount = function getFrameCount() {
          return this._frameCount;
        }
        /**
         * 获取平均帧率
         */;
        TimeManager.getAverageFPS = function getAverageFPS() {
          if (this._currentTime <= 0) {
            return 0;
          }
          return this._frameCount / this._currentTime;
        }
        /**
         * 获取当前帧率
         */;
        TimeManager.getCurrentFPS = function getCurrentFPS() {
          if (this._unscaledDeltaTime <= 0) {
            return 0;
          }
          return 1 / this._unscaledDeltaTime;
        }
        /**
         * 添加时间更新回调
         * @param callback 回调函数
         */;
        TimeManager.addUpdateCallback = function addUpdateCallback(callback) {
          if (this._updateCallbacks.indexOf(callback) === -1) {
            this._updateCallbacks.push(callback);
          }
        }
        /**
         * 移除时间更新回调
         * @param callback 要移除的回调函数
         */;
        TimeManager.removeUpdateCallback = function removeUpdateCallback(callback) {
          var index = this._updateCallbacks.indexOf(callback);
          if (index !== -1) {
            this._updateCallbacks.splice(index, 1);
          }
        }
        /**
         * 清除所有时间更新回调
         */;
        TimeManager.clearUpdateCallbacks = function clearUpdateCallbacks() {
          this._updateCallbacks.length = 0;
        }
        /**
         * 重置时间管理器
         */;
        TimeManager.reset = function reset() {
          this._initialized = false;
          this._frameCount = 0;
          this._currentTime = 0;
          this._lastTime = 0;
          this._deltaTime = 0;
          this._unscaledDeltaTime = 0;
          this._timeScale = 1.0; // 重置时间缩放
          this._maxDeltaTime = 0.1; // 重置最大时间差
          this.clearUpdateCallbacks();
        }
        /**
         * 获取时间管理器统计信息
         */;
        TimeManager.getStats = function getStats() {
          return {
            currentTime: this._currentTime,
            deltaTime: this._deltaTime,
            unscaledDeltaTime: this._unscaledDeltaTime,
            timeScale: this._timeScale,
            frameCount: this._frameCount,
            averageFPS: this.getAverageFPS(),
            currentFPS: this.getCurrentFPS(),
            maxDeltaTime: this._maxDeltaTime,
            useHighPrecision: this._useHighPrecision
          };
        };
        return TimeManager;
      }());
      /** 当前时间（秒） */
      TimeManager._currentTime = 0;
      /** 上一帧时间（秒） */
      TimeManager._lastTime = 0;
      /** 帧间时间差（秒） */
      TimeManager._deltaTime = 0;
      /** 未缩放的帧间时间差（秒） */
      TimeManager._unscaledDeltaTime = 0;
      /** 时间缩放比例 */
      TimeManager._timeScale = 1.0;
      /** 最大允许的帧间时间差（防止时间跳跃） */
      TimeManager._maxDeltaTime = 0.1;
      /** 是否使用高精度时间 */
      TimeManager._useHighPrecision = true;
      /** 是否已初始化 */
      TimeManager._initialized = false;
      /** 帧计数器 */
      TimeManager._frameCount = 0;
      /** 启动时间 */
      TimeManager._startTime = 0;
      /** 时间更新回调列表 */
      TimeManager._updateCallbacks = [];

      /**
      * 错误处理级别枚举
      */
      var ErrorLevel;
      (function (ErrorLevel) {
        /** 开发模式 - 严格检查，抛出所有错误 */
        ErrorLevel[ErrorLevel["Development"] = 0] = "Development";
        /** 测试模式 - 记录错误但不中断执行 */
        ErrorLevel[ErrorLevel["Testing"] = 1] = "Testing";
        /** 生产模式 - 最小化错误处理，优先性能 */
        ErrorLevel[ErrorLevel["Production"] = 2] = "Production";
        /** 静默模式 - 完全禁用错误处理 */
        ErrorLevel[ErrorLevel["Silent"] = 3] = "Silent";
      })(ErrorLevel || (ErrorLevel = exports('ErrorLevel', {})));
      /**
       * 高性能错误处理系统
       *
       * @description
       * 提供可配置的错误处理策略，支持开发和生产环境的不同行为。
       * 在生产环境中可以完全禁用错误检查以提高性能。
       *
       * @example
       * ```typescript
       * // 配置错误处理器
       * ErrorHandler.configure({
       *   level: ErrorLevel.Development,
       *   enableAssertions: true,
       *   enableTypeChecking: true
       * });
       *
       * // 使用断言
       * ErrorHandler.assert(player.health > 0, '玩家血量必须大于0');
       *
       * // 类型检查
       * ErrorHandler.checkType(value, 'number', '值必须是数字');
       *
       * // 性能监控
       * const result = ErrorHandler.monitor('expensiveFunction', () => {
       *   return expensiveOperation();
       * });
       * ```
       */
      var ErrorHandler = exports('ErrorHandler', /*#__PURE__*/function () {
        function ErrorHandler() {}
        /**
         * 配置错误处理器
         * @param config 配置选项
         */
        ErrorHandler.configure = function configure(config) {
          this._config = _extends({}, this._config, config);
        }
        /**
         * 设置错误处理级别
         * @param level 错误处理级别
         */;
        ErrorHandler.setLevel = function setLevel(level) {
          this._config.level = level;
          // 根据级别自动调整其他配置
          switch (level) {
            case ErrorLevel.Development:
              this._config.enableAssertions = true;
              this._config.enableTypeChecking = true;
              break;
            case ErrorLevel.Testing:
              this._config.enableAssertions = true;
              this._config.enableTypeChecking = false;
              break;
            case ErrorLevel.Production:
              this._config.enableAssertions = false;
              this._config.enableTypeChecking = false;
              break;
            case ErrorLevel.Silent:
              this._config.enableAssertions = false;
              this._config.enableTypeChecking = false;
              this._config.enablePerformanceMonitoring = false;
              break;
          }
        }
        /**
         * 断言检查
         * @param condition 条件
         * @param message 错误消息
         * @param context 上下文信息
         */;
        ErrorHandler.assert = function assert(condition, message, context) {
          if (!this._config.enableAssertions || this._config.level === ErrorLevel.Silent) {
            return;
          }
          this._errorStats.totalAssertions++;
          if (!condition) {
            var error = new Error("\u65AD\u8A00\u5931\u8D25: " + message);
            this._handleError(error, context);
          }
        }
        /**
         * 类型检查
         * @param value 要检查的值
         * @param expectedType 期望的类型
         * @param message 错误消息
         * @param context 上下文信息
         */;
        ErrorHandler.checkType = function checkType(value, expectedType, message, context) {
          if (!this._config.enableTypeChecking || this._config.level === ErrorLevel.Silent) {
            return;
          }
          this._errorStats.totalTypeChecks++;
          var actualType = typeof value;
          if (actualType !== expectedType) {
            var errorMessage = message || "\u7C7B\u578B\u68C0\u67E5\u5931\u8D25: \u671F\u671B " + expectedType + ", \u5B9E\u9645 " + actualType;
            var error = new Error(errorMessage);
            this._handleError(error, context);
          }
        }
        /**
         * 非空检查
         * @param value 要检查的值
         * @param message 错误消息
         * @param context 上下文信息
         */;
        ErrorHandler.checkNotNull = function checkNotNull(value, message, context) {
          if (!this._config.enableTypeChecking || this._config.level === ErrorLevel.Silent) {
            return;
          }
          this._errorStats.totalTypeChecks++;
          if (value == null) {
            var errorMessage = message || '值不能为null或undefined';
            var error = new Error(errorMessage);
            this._handleError(error, context);
          }
        }
        /**
         * 范围检查
         * @param value 要检查的值
         * @param min 最小值
         * @param max 最大值
         * @param message 错误消息
         * @param context 上下文信息
         */;
        ErrorHandler.checkRange = function checkRange(value, min, max, message, context) {
          if (!this._config.enableAssertions || this._config.level === ErrorLevel.Silent) {
            return;
          }
          this._errorStats.totalAssertions++;
          if (value < min || value > max) {
            var errorMessage = message || "\u503C " + value + " \u8D85\u51FA\u8303\u56F4 [" + min + ", " + max + "]";
            var error = new Error(errorMessage);
            this._handleError(error, context);
          }
        }
        /**
         * 数组边界检查
         * @param array 数组
         * @param index 索引
         * @param message 错误消息
         * @param context 上下文信息
         */;
        ErrorHandler.checkArrayBounds = function checkArrayBounds(array, index, message, context) {
          if (!this._config.enableAssertions || this._config.level === ErrorLevel.Silent) {
            return;
          }
          this._errorStats.totalAssertions++;
          if (index < 0 || index >= array.length) {
            var errorMessage = message || "\u6570\u7EC4\u7D22\u5F15 " + index + " \u8D85\u51FA\u8FB9\u754C [0, " + (array.length - 1) + "]";
            var error = new Error(errorMessage);
            this._handleError(error, context);
          }
        }
        /**
         * 性能监控装饰器
         * @param name 函数名称
         * @param fn 要监控的函数
         * @returns 函数执行结果
         */;
        ErrorHandler.monitor = function monitor(name, fn) {
          if (!this._config.enablePerformanceMonitoring || this._config.level === ErrorLevel.Silent) {
            return fn();
          }
          var startTime = performance.now();
          try {
            var result = fn();
            var endTime = performance.now();
            this._recordPerformance(name, endTime - startTime);
            return result;
          } catch (error) {
            var _endTime = performance.now();
            this._recordPerformance(name, _endTime - startTime);
            throw error;
          }
        }
        /**
         * 异步性能监控
         * @param name 函数名称
         * @param fn 要监控的异步函数
         * @returns Promise结果
         */;
        ErrorHandler.monitorAsync = /*#__PURE__*/
        function () {
          var _monitorAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, fn) {
            var startTime, result, endTime, _endTime2;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this._config.enablePerformanceMonitoring || this._config.level === ErrorLevel.Silent)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", fn());
                case 2:
                  startTime = performance.now();
                  _context2.prev = 3;
                  _context2.next = 6;
                  return fn();
                case 6:
                  result = _context2.sent;
                  endTime = performance.now();
                  this._recordPerformance(name, endTime - startTime);
                  return _context2.abrupt("return", result);
                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2["catch"](3);
                  _endTime2 = performance.now();
                  this._recordPerformance(name, _endTime2 - startTime);
                  throw _context2.t0;
                case 17:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this, [[3, 12]]);
          }));
          function monitorAsync(_x, _x2) {
            return _monitorAsync.apply(this, arguments);
          }
          return monitorAsync;
        }()
        /**
         * 记录性能数据
         */;

        ErrorHandler._recordPerformance = function _recordPerformance(name, executionTime) {
          var data = this._performanceData.get(name);
          if (!data) {
            data = {
              functionName: name,
              executionTime: 0,
              callCount: 0,
              averageTime: 0,
              maxTime: 0,
              minTime: Infinity
            };
            this._performanceData.set(name, data);
          }
          data.callCount++;
          data.executionTime += executionTime;
          data.averageTime = data.executionTime / data.callCount;
          data.maxTime = Math.max(data.maxTime, executionTime);
          data.minTime = Math.min(data.minTime, executionTime);
        }
        /**
         * 处理错误
         */;
        ErrorHandler._handleError = function _handleError(error, context) {
          this._errorStats.totalErrors++;
          // 调用错误回调
          if (this._config.onError) {
            try {
              this._config.onError(error, context);
            } catch (callbackError) {
              console.error('错误回调执行失败:', callbackError);
            }
          }
          // 根据错误级别决定行为
          switch (this._config.level) {
            case ErrorLevel.Development:
              throw error;
            // 开发模式：抛出错误
            case ErrorLevel.Testing:
              console.error('错误:', error.message, context);
              throw error;
            // 测试模式：记录并抛出
            case ErrorLevel.Production:
              console.warn('错误:', error.message);
              throw error;
            // 生产模式：警告并抛出
          }

          throw error; // 默认行为
        }
        /**
         * 发出警告
         * @param message 警告消息
         * @param context 上下文信息
         */;
        ErrorHandler.warn = function warn(message, context) {
          if (this._config.level === ErrorLevel.Silent) {
            return;
          }
          this._errorStats.totalWarnings++;
          // 调用警告回调
          if (this._config.onWarning) {
            try {
              this._config.onWarning(message, context);
            } catch (callbackError) {
              console.error('警告回调执行失败:', callbackError);
            }
          }
          // 根据错误级别决定输出方式
          switch (this._config.level) {
            case ErrorLevel.Development:
            case ErrorLevel.Testing:
              console.warn('警告:', message, context);
              break;
            case ErrorLevel.Production:
              console.warn('警告:', message);
              break;
          }
        }
        /**
         * 获取性能统计信息
         */;
        ErrorHandler.getPerformanceStats = function getPerformanceStats() {
          return new Map(this._performanceData);
        }
        /**
         * 获取错误统计信息
         */;
        ErrorHandler.getErrorStats = function getErrorStats() {
          return _extends({}, this._errorStats);
        }
        /**
         * 重置统计信息
         */;
        ErrorHandler.resetStats = function resetStats() {
          this._performanceData.clear();
          this._errorStats = {
            totalErrors: 0,
            totalWarnings: 0,
            totalAssertions: 0,
            totalTypeChecks: 0
          };
        }
        /**
         * 获取当前配置
         */;
        ErrorHandler.getConfig = function getConfig() {
          return _extends({}, this._config);
        }
        /**
         * 创建带错误处理的函数包装器
         * @param fn 原函数
         * @param name 函数名称
         * @param enableMonitoring 是否启用性能监控
         * @returns 包装后的函数
         */;
        ErrorHandler.wrap = function wrap(fn, name, enableMonitoring) {
          var _this = this;
          if (enableMonitoring === void 0) {
            enableMonitoring = false;
          }
          return function () {
            for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
              args[_key16] = arguments[_key16];
            }
            try {
              if (enableMonitoring) {
                return _this.monitor(name, function () {
                  return fn.apply(void 0, args);
                });
              } else {
                return fn.apply(void 0, args);
              }
            } catch (error) {
              _this._handleError(error instanceof Error ? error : new Error(String(error)), {
                args: args,
                functionName: name
              });
            }
          };
        };
        return ErrorHandler;
      }());
      ErrorHandler._config = {
        level: ErrorLevel.Development,
        enableAssertions: true,
        enableTypeChecking: true,
        enablePerformanceMonitoring: false
      };
      /** 性能监控数据 */
      ErrorHandler._performanceData = new Map();
      /** 错误统计 */
      ErrorHandler._errorStats = {
        totalErrors: 0,
        totalWarnings: 0,
        totalAssertions: 0,
        totalTypeChecks: 0
      };
      /**
       * 高性能运行时类型检查工具
       *
       * @description
       * 提供全面的运行时类型检查和类型守卫功能，替代不安全的类型断言。
       * 支持基础类型、复合类型、自定义验证器等。
       *
       * @example
       * ```typescript
       * // 基础类型检查
       * if (TypeGuards.isString(value)) {
       *   // value 现在是 string 类型
       *   console.log(value.toUpperCase());
       * }
       *
       * // 复合类型检查
       * const result = TypeGuards.checkObject(data, {
       *   name: TypeGuards.validators.string,
       *   age: TypeGuards.validators.number,
       *   email: TypeGuards.validators.optional(TypeGuards.validators.string)
       * });
       *
       * // 数组类型检查
       * if (TypeGuards.isArrayOf(value, TypeGuards.isNumber)) {
       *   // value 现在是 number[] 类型
       *   const sum = value.reduce((a, b) => a + b, 0);
       * }
       *
       * // 自定义验证器
       * const isPositiveNumber = TypeGuards.createValidator<number>(
       *   (value): value is number => typeof value === 'number' && value > 0,
       *   'PositiveNumber'
       * );
       * ```
       */
      var TypeGuards = exports('TypeGuards', /*#__PURE__*/function () {
        function TypeGuards() {}
        // ===== 基础类型守卫 =====
        /**
         * 检查是否为字符串
         */
        TypeGuards.isString = function isString(value) {
          return typeof value === 'string';
        }
        /**
         * 检查是否为数字
         */;
        TypeGuards.isNumber = function isNumber(value) {
          return typeof value === 'number' && !isNaN(value);
        }
        /**
         * 检查是否为布尔值
         */;
        TypeGuards.isBoolean = function isBoolean(value) {
          return typeof value === 'boolean';
        }
        /**
         * 检查是否为函数
         */;
        TypeGuards.isFunction = function isFunction(value) {
          return typeof value === 'function';
        }
        /**
         * 检查是否为对象（非null）
         */;
        TypeGuards.isObject = function isObject(value) {
          return typeof value === 'object' && value !== null;
        }
        /**
         * 检查是否为数组
         */;
        TypeGuards.isArray = function isArray(value) {
          return Array.isArray(value);
        }
        /**
         * 检查是否为null或undefined
         */;
        TypeGuards.isNullish = function isNullish(value) {
          return value == null;
        }
        /**
         * 检查是否不为null或undefined
         */;
        TypeGuards.isNotNull = function isNotNull(value) {
          return value != null;
        }
        // ===== 复合类型守卫 =====
        /**
         * 检查是否为指定类型的数组
         */;
        TypeGuards.isArrayOf = function isArrayOf(value, itemGuard) {
          return Array.isArray(value) && value.every(itemGuard);
        }
        /**
         * 检查是否为字符串数组
         */;
        TypeGuards.isStringArray = function isStringArray(value) {
          return this.isArrayOf(value, this.isString);
        }
        /**
         * 检查是否为数字数组
         */;
        TypeGuards.isNumberArray = function isNumberArray(value) {
          return this.isArrayOf(value, this.isNumber);
        }
        /**
         * 检查是否为指定类的实例
         */;
        TypeGuards.isInstanceOf = function isInstanceOf(value, constructor) {
          return value instanceof constructor;
        }
        /**
         * 检查对象是否具有指定的属性
         */;
        TypeGuards.hasProperty = function hasProperty(value, property) {
          return this.isObject(value) && property in value;
        }
        /**
         * 检查对象是否具有指定类型的属性
         */;
        TypeGuards.hasPropertyOfType = function hasPropertyOfType(value, property, typeGuard) {
          return this.hasProperty(value, property) && typeGuard(value[property]);
        }
        // ===== 高级类型检查 =====
        /**
         * 创建自定义验证器
         */;
        TypeGuards.createValidator = function createValidator(guard, typeName, errorMessage) {
          return {
            validate: guard,
            typeName: typeName,
            errorMessage: errorMessage || "Expected " + typeName
          };
        }
        /**
         * 检查对象结构
         */;
        TypeGuards.checkObject = function checkObject(value, schema) {
          if (!this.isObject(value)) {
            return {
              success: false,
              value: value,
              error: 'Value is not an object',
              expectedType: 'object',
              actualType: typeof value
            };
          }
          var obj = value;
          var result = {};
          for (var _i2 = 0, _Object$entries = Object.entries(schema); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _Object$entries[_i2],
              key = _Object$entries$_i[0],
              validator = _Object$entries$_i[1];
            var propValue = obj[key];
            if (!validator.validate(propValue)) {
              return {
                success: false,
                value: value,
                error: "Property '" + key + "' " + (validator.errorMessage || "is not of type " + validator.typeName),
                expectedType: validator.typeName,
                actualType: typeof propValue
              };
            }
            result[key] = propValue;
          }
          return {
            success: true,
            value: result
          };
        }
        /**
         * 安全类型转换
         */;
        TypeGuards.safeCast = function safeCast(value, validator) {
          if (validator.validate(value)) {
            return {
              success: true,
              value: value
            };
          }
          return {
            success: false,
            value: value,
            error: validator.errorMessage || "Value is not of type " + validator.typeName,
            expectedType: validator.typeName,
            actualType: typeof value
          };
        }
        /**
         * 断言类型（开发模式下抛出错误）
         */;
        TypeGuards.assertType = function assertType(value, validator, message) {
          if (!validator.validate(value)) {
            var error = message || validator.errorMessage || "Type assertion failed: expected " + validator.typeName + ", got " + typeof value;
            throw new TypeError(error);
          }
        }
        /**
         * 尝试类型转换
         */;
        TypeGuards.tryConvert = function tryConvert(value, converter, validator) {
          try {
            var converted = converter(value);
            if (validator.validate(converted)) {
              return {
                success: true,
                value: converted
              };
            }
            return {
              success: false,
              value: converted,
              error: "Conversion result is not of type " + validator.typeName,
              expectedType: validator.typeName,
              actualType: typeof converted
            };
          } catch (error) {
            return {
              success: false,
              value: value,
              error: "Conversion failed: " + (error instanceof Error ? error.message : String(error)),
              expectedType: validator.typeName,
              actualType: typeof value
            };
          }
        }
        // ===== 常用转换器 =====
        /**
         * 字符串转数字
         */;
        TypeGuards.stringToNumber = function stringToNumber(value) {
          return this.tryConvert(value, function (v) {
            if (typeof v === 'string') {
              var num = Number(v);
              if (isNaN(num)) {
                throw new Error('Invalid number format');
              }
              return num;
            }
            throw new Error('Value is not a string');
          }, this.validators.number);
        }
        /**
         * 任意值转字符串
         */;
        TypeGuards.toString = function toString(value) {
          return this.tryConvert(value, function (v) {
            return String(v);
          }, this.validators.string);
        }
        /**
         * 任意值转布尔值
         */;
        TypeGuards.toBoolean = function toBoolean(value) {
          return this.tryConvert(value, function (v) {
            return Boolean(v);
          }, this.validators["boolean"]);
        }
        // ===== 范围检查 =====
        /**
         * 检查数字是否在指定范围内
         */;
        TypeGuards.isInRange = function isInRange(value, min, max, inclusive) {
          if (inclusive === void 0) {
            inclusive = true;
          }
          if (!this.isNumber(value)) {
            return false;
          }
          return inclusive ? value >= min && value <= max : value > min && value < max;
        }
        /**
         * 检查字符串长度是否在指定范围内
         */;
        TypeGuards.isStringLengthInRange = function isStringLengthInRange(value, minLength, maxLength) {
          return this.isString(value) && value.length >= minLength && value.length <= maxLength;
        }
        /**
         * 检查数组长度是否在指定范围内
         */;
        TypeGuards.isArrayLengthInRange = function isArrayLengthInRange(value, minLength, maxLength) {
          return this.isArray(value) && value.length >= minLength && value.length <= maxLength;
        }
        // ===== 模式匹配 =====
        /**
         * 检查字符串是否匹配正则表达式
         */;
        TypeGuards.matchesPattern = function matchesPattern(value, pattern) {
          return this.isString(value) && pattern.test(value);
        }
        /**
         * 检查是否为有效的电子邮件地址
         */;
        TypeGuards.isEmail = function isEmail(value) {
          var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return this.matchesPattern(value, emailPattern);
        }
        /**
         * 检查是否为有效的URL
         */;
        TypeGuards.isUrl = function isUrl(value) {
          if (!this.isString(value)) {
            return false;
          }
          try {
            new URL(value);
            return true;
          } catch (_unused) {
            return false;
          }
        }
        /**
         * 检查是否为有效的UUID
         */;
        TypeGuards.isUuid = function isUuid(value) {
          var uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
          return this.matchesPattern(value, uuidPattern);
        };
        return TypeGuards;
      }());
      /** 内置验证器 */
      TypeGuards.validators = {
        /** 字符串验证器 */
        string: TypeGuards.createValidator(function (value) {
          return typeof value === 'string';
        }, 'string'),
        /** 数字验证器 */
        number: TypeGuards.createValidator(function (value) {
          return typeof value === 'number' && !isNaN(value);
        }, 'number'),
        /** 布尔值验证器 */
        "boolean": TypeGuards.createValidator(function (value) {
          return typeof value === 'boolean';
        }, 'boolean'),
        /** 函数验证器 */
        "function": TypeGuards.createValidator(function (value) {
          return typeof value === 'function';
        }, 'function'),
        /** 对象验证器 */
        object: TypeGuards.createValidator(function (value) {
          return typeof value === 'object' && value !== null;
        }, 'object'),
        /** 数组验证器 */
        array: TypeGuards.createValidator(function (value) {
          return Array.isArray(value);
        }, 'array'),
        /** 非空验证器 */
        notNull: TypeGuards.createValidator(function (value) {
          return value != null;
        }, 'not null'),
        /** 整数验证器 */
        integer: TypeGuards.createValidator(function (value) {
          return typeof value === 'number' && Number.isInteger(value);
        }, 'integer'),
        /** 正数验证器 */
        positiveNumber: TypeGuards.createValidator(function (value) {
          return typeof value === 'number' && value > 0;
        }, 'positive number'),
        /** 非负数验证器 */
        nonNegativeNumber: TypeGuards.createValidator(function (value) {
          return typeof value === 'number' && value >= 0;
        }, 'non-negative number'),
        /** 非空字符串验证器 */
        nonEmptyString: TypeGuards.createValidator(function (value) {
          return typeof value === 'string' && value.trim().length > 0;
        }, 'non-empty string'),
        /** 可选验证器工厂 */
        optional: function optional(validator) {
          return {
            validate: function validate(value) {
              return value === undefined || validator.validate(value);
            },
            typeName: validator.typeName + " | undefined",
            errorMessage: "Expected " + validator.typeName + " or undefined"
          };
        },
        /** 可空验证器工厂 */
        nullable: function nullable(validator) {
          return {
            validate: function validate(value) {
              return value === null || validator.validate(value);
            },
            typeName: validator.typeName + " | null",
            errorMessage: "Expected " + validator.typeName + " or null"
          };
        },
        /** 联合类型验证器工厂 */
        union: function union() {
          for (var _len18 = arguments.length, validators = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
            validators[_key18] = arguments[_key18];
          }
          return {
            validate: function validate(value) {
              return validators.some(function (v) {
                return v.validate(value);
              });
            },
            typeName: validators.map(function (v) {
              return v.typeName;
            }).join(' | '),
            errorMessage: "Expected one of: " + validators.map(function (v) {
              return v.typeName;
            }).join(', ')
          };
        }
      };

      /**
       * 行为树节点的执行状态枚举
       *
       * @description 定义了行为树中每个节点可能的执行状态
       */
      var TaskStatus;
      (function (TaskStatus) {
        /**
         * 无效状态 - 节点尚未执行或已被重置
         */
        TaskStatus[TaskStatus["Invalid"] = 0] = "Invalid";
        /**
         * 成功状态 - 节点执行完成且成功
         */
        TaskStatus[TaskStatus["Success"] = 1] = "Success";
        /**
         * 失败状态 - 节点执行完成但失败
         */
        TaskStatus[TaskStatus["Failure"] = 2] = "Failure";
        /**
         * 运行中状态 - 节点正在执行，需要在下一帧继续
         */
        TaskStatus[TaskStatus["Running"] = 3] = "Running";
      })(TaskStatus || (TaskStatus = exports('TaskStatus', {})));

      /**
       * 行为树节点的抽象基类
       *
       * @description 所有行为树节点的基类，定义了节点的生命周期和基本行为
       * @template T 上下文对象类型，通常包含游戏状态、AI数据等
       *
       * @example
       * ```typescript
       * class CustomAction<GameContext> extends Behavior<GameContext> {
       *   update(context: GameContext): TaskStatus {
       *     // 执行自定义逻辑
       *     return TaskStatus.Success;
       *   }
       * }
       * ```
       */
      var Behavior = /*#__PURE__*/function () {
        function Behavior() {
          /**
           * 当前节点的执行状态
           * @default TaskStatus.Invalid
           */
          this.status = TaskStatus.Invalid;
        }
        /**
         * 重置节点状态为无效
         *
         * @description 使该节点的状态无效，复合节点可以重写此方法来同时重置子节点
         */
        var _proto4 = Behavior.prototype;
        _proto4.invalidate = function invalidate() {
          this.status = TaskStatus.Invalid;
        }
        /**
         * 节点开始执行时的回调
         *
         * @description 在节点首次执行或状态从Invalid变为其他状态时调用
         * 用于初始化变量、重置状态等准备工作
         */;
        _proto4.onStart = function onStart() {}
        /**
         * 节点执行结束时的回调
         *
         * @description 当节点状态变为Success或Failure时调用
         * 用于清理资源、记录结果等收尾工作
         */;
        _proto4.onEnd = function onEnd() {}
        /**
         * 释放节点资源
         *
         * @description 用于清理节点持有的资源，防止内存泄漏
         * 复合节点和装饰器节点应重写此方法来递归释放子节点
         * 调用后节点不应再被使用
         */;
        _proto4.dispose = function dispose() {
          this.status = TaskStatus.Invalid;
        }
        /**
         * 节点执行的主要入口点
         *
         * @description 处理节点的完整执行流程，包括生命周期管理
         * 1. 如果状态为Invalid，调用onStart()
         * 2. 调用update()执行核心逻辑
         * 3. 如果状态不为Running，调用onEnd()
         *
         * @param context 执行上下文
         * @returns 执行后的状态
         */;
        _proto4.tick = function tick(context) {
          if (this.status == TaskStatus.Invalid) this.onStart();
          this.status = this.update(context);
          if (this.status != TaskStatus.Running) this.onEnd();
          return this.status;
        };
        return Behavior;
      }();
      /**
       * 黑板变量类型枚举
       */
      var BlackboardValueType;
      (function (BlackboardValueType) {
        BlackboardValueType["String"] = "string";
        BlackboardValueType["Number"] = "number";
        BlackboardValueType["Boolean"] = "boolean";
        BlackboardValueType["Vector2"] = "vector2";
        BlackboardValueType["Vector3"] = "vector3";
        BlackboardValueType["Object"] = "object";
        BlackboardValueType["Array"] = "array";
      })(BlackboardValueType || (BlackboardValueType = exports('BlackboardValueType', {})));
      /**
       * 行为树黑板系统
       *
       * @description
       * 提供类型安全的变量存储和访问机制，支持：
       * - 类型化变量定义和访问
       * - 变量监听和回调
       * - 序列化和反序列化
       * - 实时调试和编辑
       *
       * @example
       * ```typescript
       * // 创建黑板实例
       * const blackboard = new Blackboard();
       *
       * // 定义变量
       * blackboard.defineVariable('playerHealth', BlackboardValueType.Number, 100, {
       *   description: '玩家生命值',
       *   min: 0,
       *   max: 100
       * });
       *
       * // 设置和获取值
       * blackboard.setValue('playerHealth', 80);
       * const health = blackboard.getValue<number>('playerHealth');
       *
       * // 监听变量变化
       * blackboard.addListener('playerHealth', (newVal, oldVal) => {
       *   console.log(`玩家生命值从 ${oldVal} 变为 ${newVal}`);
       * });
       * ```
       */
      var Blackboard = exports('Blackboard', /*#__PURE__*/function () {
        function Blackboard() {
          /** 变量定义存储 */
          this._variables = new Map();
          /** 变量监听器存储 */
          this._listeners = new Map();
          /** 监听器计数器 */
          this._listenerIdCounter = 0;
          /** 变量修改历史 */
          this._history = [];
          /** 是否启用历史记录 */
          this.enableHistory = false;
        }
        /**
         * 定义一个黑板变量
         *
         * @param name 变量名
         * @param type 变量类型
         * @param defaultValue 默认值
         * @param options 额外选项
         */
        var _proto5 = Blackboard.prototype;
        _proto5.defineVariable = function defineVariable(name, type, defaultValue, options) {
          if (options === void 0) {
            options = {};
          }
          if (!name || typeof name !== 'string') {
            throw new Error('变量名必须是非空字符串');
          }
          if (this._variables.has(name)) {
            console.warn("\u9ED1\u677F\u53D8\u91CF \"" + name + "\" \u5DF2\u5B58\u5728\uFF0C\u5C06\u88AB\u91CD\u65B0\u5B9A\u4E49");
          }
          // 验证默认值类型
          if (!this._validateValueType(defaultValue, type)) {
            throw new Error("\u9ED8\u8BA4\u503C\u7C7B\u578B\u4E0E\u53D8\u91CF\u7C7B\u578B \"" + type + "\" \u4E0D\u5339\u914D");
          }
          var variable = {
            name: name,
            type: type,
            value: this._cloneValue(defaultValue),
            defaultValue: this._cloneValue(defaultValue),
            description: options.description || '',
            readonly: options.readonly || false,
            group: options.group || 'Default',
            min: options.min,
            max: options.max,
            options: options.options ? [].concat(options.options) : undefined
          };
          this._variables.set(name, variable);
        }
        /**
         * 设置变量值
         *
         * @param name 变量名
         * @param value 新值
         * @param force 是否强制设置（忽略只读限制）
         */;
        _proto5.setValue = function setValue(name, value, force) {
          if (force === void 0) {
            force = false;
          }
          var variable = this._variables.get(name);
          if (!variable) {
            console.warn("\u5C1D\u8BD5\u8BBE\u7F6E\u4E0D\u5B58\u5728\u7684\u9ED1\u677F\u53D8\u91CF \"" + name + "\"");
            return false;
          }
          if (variable.readonly && !force) {
            console.warn("\u5C1D\u8BD5\u4FEE\u6539\u53EA\u8BFB\u9ED1\u677F\u53D8\u91CF \"" + name + "\"");
            return false;
          }
          // 类型验证
          if (!this._validateValueType(value, variable.type)) {
            console.error("\u8BBE\u7F6E\u7684\u503C\u7C7B\u578B\u4E0E\u53D8\u91CF \"" + name + "\" \u7684\u7C7B\u578B \"" + variable.type + "\" \u4E0D\u5339\u914D");
            return false;
          }
          // 数值范围验证
          if (variable.type === BlackboardValueType.Number && typeof value === 'number') {
            if (variable.min !== undefined && value < variable.min) {
              console.warn("\u53D8\u91CF \"" + name + "\" \u7684\u503C " + value + " \u5C0F\u4E8E\u6700\u5C0F\u503C " + variable.min);
              return false;
            }
            if (variable.max !== undefined && value > variable.max) {
              console.warn("\u53D8\u91CF \"" + name + "\" \u7684\u503C " + value + " \u5927\u4E8E\u6700\u5927\u503C " + variable.max);
              return false;
            }
          }
          // 可选值验证
          if (variable.options && !variable.options.includes(value)) {
            console.warn("\u53D8\u91CF \"" + name + "\" \u7684\u503C\u4E0D\u5728\u5141\u8BB8\u7684\u9009\u9879\u4E2D");
            return false;
          }
          var oldValue = this._cloneValue(variable.value);
          var newValue = this._cloneValue(value);
          // 更新值
          variable.value = newValue;
          // 记录历史
          if (this.enableHistory) {
            this._history.push({
              variableName: name,
              oldValue: oldValue,
              newValue: newValue,
              timestamp: Date.now()
            });
          }
          // 触发监听器
          this._notifyListeners(name, newValue, oldValue);
          return true;
        }
        /**
         * 获取变量值
         *
         * @param name 变量名
         * @param defaultValue 变量不存在时的默认返回值
         * @returns 变量值
         */;
        _proto5.getValue = function getValue(name, defaultValue) {
          var variable = this._variables.get(name);
          if (!variable) {
            if (defaultValue !== undefined) {
              return defaultValue;
            }
            console.warn("\u5C1D\u8BD5\u83B7\u53D6\u4E0D\u5B58\u5728\u7684\u9ED1\u677F\u53D8\u91CF \"" + name + "\"");
            return undefined;
          }
          return this._cloneValue(variable.value);
        }
        /**
         * 设置变量值 (setValue的别名方法)
         *
         * @param name 变量名
         * @param value 新值
         * @param force 是否强制设置（忽略只读限制）
         */;
        _proto5.set = function set(name, value, force) {
          if (force === void 0) {
            force = false;
          }
          return this.setValue(name, value, force);
        }
        /**
         * 获取变量值 (getValue的别名方法)
         *
         * @param name 变量名
         * @param defaultValue 变量不存在时的默认返回值
         * @returns 变量值
         */;
        _proto5.get = function get(name, defaultValue) {
          return this.getValue(name, defaultValue);
        }
        /**
         * 检查变量是否存在
         */;
        _proto5.hasVariable = function hasVariable(name) {
          return this._variables.has(name);
        }
        /**
         * 获取变量定义
         */;
        _proto5.getVariableDefinition = function getVariableDefinition(name) {
          var variable = this._variables.get(name);
          return variable ? _extends({}, variable) : undefined;
        }
        /**
         * 获取所有变量名称
         */;
        _proto5.getVariableNames = function getVariableNames() {
          return Array.from(this._variables.keys());
        }
        /**
         * 按分组获取变量
         */;
        _proto5.getVariablesByGroup = function getVariablesByGroup(group) {
          return Array.from(this._variables.values()).filter(function (v) {
            return v.group === group;
          }).map(function (v) {
            return _extends({}, v);
          });
        }
        /**
         * 获取所有分组
         */;
        _proto5.getGroups = function getGroups() {
          var groups = new Set();
          this._variables.forEach(function (variable) {
            groups.add(variable.group || 'Default');
          });
          return Array.from(groups).sort();
        }
        /**
         * 重置变量到默认值
         */;
        _proto5.resetVariable = function resetVariable(name) {
          var variable = this._variables.get(name);
          if (!variable) {
            return false;
          }
          return this.setValue(name, variable.defaultValue, true);
        }
        /**
         * 重置所有变量到默认值
         */;
        _proto5.resetAll = function resetAll() {
          var _this4 = this;
          this._variables.forEach(function (variable, name) {
            _this4.setValue(name, variable.defaultValue, true);
          });
        }
        /**
         * 删除变量
         */;
        _proto5.removeVariable = function removeVariable(name) {
          if (!this._variables.has(name)) {
            return false;
          }
          this._variables["delete"](name);
          this._listeners["delete"](name);
          return true;
        }
        /**
         * 添加变量监听器
         */;
        _proto5.addListener = function addListener(variableName, callback) {
          var id = "listener_" + this._listenerIdCounter++;
          var listener = {
            variableName: variableName,
            callback: callback,
            id: id
          };
          if (!this._listeners.has(variableName)) {
            this._listeners.set(variableName, []);
          }
          this._listeners.get(variableName).push(listener);
          return id;
        }
        /**
         * 移除监听器
         */;
        _proto5.removeListener = function removeListener(listenerId) {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._listeners.entries()), _step4; !(_step4 = _iterator4()).done;) {
            var _step4$value = _step4.value,
              variableName = _step4$value[0],
              listeners = _step4$value[1];
            var _index3 = listeners.findIndex(function (l) {
              return l.id === listenerId;
            });
            if (_index3 !== -1) {
              listeners.splice(_index3, 1);
              if (listeners.length === 0) {
                this._listeners["delete"](variableName);
              }
              return true;
            }
          }
          return false;
        }
        /**
         * 序列化黑板数据
         */;
        _proto5.serialize = function serialize() {
          var data = {
            variables: Array.from(this._variables.entries()).map(function (_ref3) {
              var name = _ref3[0],
                variable = _ref3[1];
              return {
                name: name,
                type: variable.type,
                value: variable.value,
                defaultValue: variable.defaultValue,
                description: variable.description,
                readonly: variable.readonly,
                group: variable.group,
                min: variable.min,
                max: variable.max,
                options: variable.options
              };
            })
          };
          return JSON.stringify(data, null, 2);
        }
        /**
         * 从序列化数据恢复黑板
         */;
        _proto5.deserialize = function deserialize(data) {
          try {
            var parsed = JSON.parse(data);
            if (!parsed.variables || !Array.isArray(parsed.variables)) {
              throw new Error('无效的黑板数据格式');
            }
            // 清空现有数据
            this._variables.clear();
            this._listeners.clear();
            // 恢复变量定义
            for (var _iterator5 = _createForOfIteratorHelperLoose(parsed.variables), _step5; !(_step5 = _iterator5()).done;) {
              var varData = _step5.value;
              this.defineVariable(varData.name, varData.type, varData.defaultValue, {
                description: varData.description,
                readonly: varData.readonly,
                group: varData.group,
                min: varData.min,
                max: varData.max,
                options: varData.options
              });
              // 设置当前值
              this.setValue(varData.name, varData.value, true);
            }
            return true;
          } catch (error) {
            console.error('反序列化黑板数据失败:', error);
            return false;
          }
        }
        /**
         * 获取修改历史
         */;
        _proto5.getHistory = function getHistory() {
          return [].concat(this._history);
        }
        /**
         * 清空历史记录
         */;
        _proto5.clearHistory = function clearHistory() {
          this._history.length = 0;
        }
        /**
         * 验证值类型
         */;
        _proto5._validateValueType = function _validateValueType(value, type) {
          switch (type) {
            case BlackboardValueType.String:
              return typeof value === 'string';
            case BlackboardValueType.Number:
              return typeof value === 'number' && !isNaN(value);
            case BlackboardValueType.Boolean:
              return typeof value === 'boolean';
            case BlackboardValueType.Vector2:
              return this._isVector2(value);
            case BlackboardValueType.Vector3:
              return this._isVector3(value);
            case BlackboardValueType.Object:
              return typeof value === 'object' && value !== null && !Array.isArray(value);
            case BlackboardValueType.Array:
              return Array.isArray(value);
            default:
              return true;
          }
        }
        /**
         * 检查是否为Vector2
         */;
        _proto5._isVector2 = function _isVector2(value) {
          return typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number';
        }
        /**
         * 检查是否为Vector3
         */;
        _proto5._isVector3 = function _isVector3(value) {
          return typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && typeof value.z === 'number';
        }
        /**
         * 深拷贝值
         */;
        _proto5._cloneValue = function _cloneValue(value) {
          var _this5 = this;
          if (value === null || typeof value !== 'object') {
            return value;
          }
          if (Array.isArray(value)) {
            return value.map(function (item) {
              return _this5._cloneValue(item);
            });
          }
          var cloned = {};
          for (var key in value) {
            if (value.hasOwnProperty(key)) {
              cloned[key] = this._cloneValue(value[key]);
            }
          }
          return cloned;
        }
        /**
         * 通知监听器
         */;
        _proto5._notifyListeners = function _notifyListeners(variableName, newValue, oldValue) {
          var listeners = this._listeners.get(variableName);
          if (listeners) {
            listeners.forEach(function (listener) {
              try {
                listener.callback(newValue, oldValue);
              } catch (error) {
                console.error("\u9ED1\u677F\u76D1\u542C\u5668\u56DE\u8C03\u6267\u884C\u5931\u8D25:", error);
              }
            });
          }
        };
        return Blackboard;
      }());
      /**
       * 行为树控制器
       *
       * @description 管理行为树的执行，支持定时更新和上下文管理
       * @template T 上下文对象类型
       *
       * @example
       * ```typescript
       * // 创建游戏AI的行为树
       * interface GameContext {
       *   player: Player;
       *   enemies: Enemy[];
       *   gameTime: number;
       * }
       *
       * const context: GameContext = { ... };
       * const rootNode = new Selector(...);
       * const behaviorTree = new BehaviorTree(context, rootNode, 0.1); // 每100ms更新一次
       *
       * // 在游戏循环中调用
       * behaviorTree.tick();
       * ```
       */
      var BehaviorTree = exports('BehaviorTree', /*#__PURE__*/function () {
        /**
         * 创建行为树实例
         *
         * @param context 执行上下文对象
         * @param rootNode 根节点
         * @param updatePeriod 更新周期，0表示每帧更新
         * @param performanceMode 是否启用性能优化模式，默认false
         * @param blackboard 可选的黑板实例，如果不提供将自动创建
         * @throws {Error} 当context或rootNode为null时抛出错误
         */
        function BehaviorTree(context, rootNode, updatePeriod, performanceMode, blackboard) {
          if (updatePeriod === void 0) {
            updatePeriod = 0.2;
          }
          if (performanceMode === void 0) {
            performanceMode = false;
          }
          /** 上次更新的时间戳（秒） */
          this._lastTime = 0;
          /** 是否启用性能优化模式 */
          this._performanceMode = false;
          /** 是否暂停 */
          this._paused = false;
          /** 性能统计信息 */
          this._stats = {
            totalTicks: 0,
            totalExecutionTime: 0,
            averageExecutionTime: 0,
            lastExecutionTime: 0
          };
          if (context == null) {
            throw new Error('上下文不能为null或undefined');
          }
          if (rootNode == null) {
            throw new Error('根节点不能为null或undefined');
          }
          if (updatePeriod < 0) {
            throw new Error('更新周期不能为负数');
          }
          this._context = context;
          this._root = rootNode;
          this._updatePeriod = updatePeriod;
          // 修正的初始化逻辑：
          // - 每帧模式: _elapsedTime = 0 (总是更新)
          // - 定时模式: _elapsedTime = updatePeriod (需要累积时间)
          this._elapsedTime = updatePeriod;
          this._performanceMode = performanceMode;
          this._lastTime = this._getCurrentTime();
          this._blackboard = blackboard || new Blackboard();
          // 将黑板注入到上下文中
          this._context.blackboard = this._blackboard;
        }
        /**
         * 获取当前时间（秒）
         * 优先使用全局时间管理器，回退到本地时间计算
         */
        var _proto6 = BehaviorTree.prototype;
        _proto6._getCurrentTime = function _getCurrentTime() {
          // 优先使用全局时间管理器
          try {
            return TimeManager.getCurrentTime();
          } catch (_unused2) {
            // 回退到本地时间计算
            if (this._performanceMode) {
              return Date.now() / 1000;
            } else {
              return performance.now() / 1000;
            }
          }
        }
        /**
         * 更新行为树
         *
         * @description
         * 根据updatePeriod设置决定是否执行根节点：
         * - updatePeriod > 0：按时间间隔更新
         * - updatePeriod <= 0：每次调用都更新
         *
         * 通常在游戏主循环中每帧调用此方法
         *
         * @param deltaTime 可选的时间差值（秒），如果提供则使用此值而不是计算
         */;
        _proto6.tick = function tick(deltaTime) {
          var startTime = this._performanceMode ? 0 : this._getCurrentTime();
          // 如果暂停则不执行
          if (this._paused) {
            return;
          }
          try {
            if (this.updatePeriod > 0) {
              var actualDeltaTime;
              if (deltaTime !== undefined) {
                // 使用提供的deltaTime，避免时间计算开销
                actualDeltaTime = deltaTime;
              } else {
                // 优先使用全局时间管理器的deltaTime
                try {
                  actualDeltaTime = TimeManager.getDeltaTime();
                  if (actualDeltaTime <= 0) {
                    // 如果全局时间管理器未初始化，回退到本地计算
                    var currentTime = this._getCurrentTime();
                    actualDeltaTime = currentTime - this._lastTime;
                    this._lastTime = currentTime;
                  }
                } catch (_unused3) {
                  // 回退到本地时间计算
                  var _currentTime = this._getCurrentTime();
                  actualDeltaTime = _currentTime - this._lastTime;
                  this._lastTime = _currentTime;
                }
              }
              // 验证deltaTime的有效性
              if (actualDeltaTime < 0 || !isFinite(actualDeltaTime)) {
                ErrorHandler.warn('BehaviorTree: 无效的deltaTime值，跳过此次更新', {
                  deltaTime: actualDeltaTime
                });
                return;
              }
              // 防止异常大的时间跳跃
              actualDeltaTime = Math.min(actualDeltaTime, 1.0);
              this._elapsedTime -= actualDeltaTime;
              if (this._elapsedTime <= 0) {
                // 处理可能的时间累积，确保稳定的更新频率
                while (this._elapsedTime <= 0) {
                  this._elapsedTime += this.updatePeriod;
                }
                this._executeRoot();
              }
            } else {
              // 每帧更新模式
              this._executeRoot();
            }
          } catch (error) {
            ErrorHandler.warn('行为树更新时发生错误', {
              error: error,
              context: this._context
            });
          } finally {
            // 更新性能统计
            if (!this._performanceMode && startTime > 0) {
              var executionTime = this._getCurrentTime() - startTime;
              this._updateStats(executionTime);
            }
          }
        }
        /**
         * 执行根节点
         */;
        _proto6._executeRoot = function _executeRoot() {
          this._root.tick(this._context);
          this._stats.totalTicks++;
        }
        /**
         * 更新性能统计信息
         * @param executionTime 执行时间
         */;
        _proto6._updateStats = function _updateStats(executionTime) {
          this._stats.lastExecutionTime = executionTime;
          this._stats.totalExecutionTime += executionTime;
          this._stats.averageExecutionTime = this._stats.totalExecutionTime / this._stats.totalTicks;
        }
        /**
         * 获取当前上下文
         * @returns 执行上下文对象
         */;
        _proto6.getContext = function getContext() {
          return this._context;
        }
        /**
         * 获取黑板实例
         * @returns 黑板实例
         */;
        _proto6.getBlackboard = function getBlackboard() {
          return this._blackboard;
        }
        /**
         * 更新上下文
         * @param context 新的上下文对象
         * @throws {Error} 当context为null时抛出错误
         */;
        _proto6.setContext = function setContext(context) {
          if (context == null) {
            throw new Error('上下文不能为null或undefined');
          }
          this._context = context;
          // 确保新上下文中也包含黑板引用
          this._context.blackboard = this._blackboard;
        }
        /**
         * 获取根节点
         * @returns 根节点实例
         */;
        _proto6.getRoot = function getRoot() {
          return this._root;
        }
        /**
         * 设置新的根节点
         * @param rootNode 新的根节点
         * @throws {Error} 当rootNode为null时抛出错误
         */;
        _proto6.setRoot = function setRoot(rootNode) {
          if (rootNode == null) {
            throw new Error('根节点不能为null或undefined');
          }
          this._root = rootNode;
        }
        /**
         * 强制重置整个行为树
         * @description 将根节点及其所有子节点重置为Invalid状态
         */;
        _proto6.reset = function reset() {
          try {
            this._root.invalidate();
            this._elapsedTime = this.updatePeriod;
            this._lastTime = this._getCurrentTime();
          } catch (error) {
            console.error('重置行为树时发生错误:', error);
          }
        }
        /**
         * 设置性能模式
         * @param enabled 是否启用性能模式
         */;
        _proto6.setPerformanceMode = function setPerformanceMode(enabled) {
          this._performanceMode = enabled;
          if (enabled) {
            console.log('行为树性能模式已启用：使用较低精度的时间计算以提高性能');
          }
        }
        /**
         * 获取性能统计信息
         * @returns 性能统计对象
         */;
        _proto6.getStats = function getStats() {
          return _extends({}, this._stats);
        }
        /**
         * 重置性能统计信息
         */;
        _proto6.resetStats = function resetStats() {
          this._stats = {
            totalTicks: 0,
            totalExecutionTime: 0,
            averageExecutionTime: 0,
            lastExecutionTime: 0
          };
        }
        /**
         * 检查行为树是否处于活动状态
         * @returns 是否有待处理的更新
         */;
        _proto6.isActive = function isActive() {
          if (this.updatePeriod <= 0) {
            return true; // 每帧更新模式：总是活动
          }
          // 定时更新模式：如果还没有执行过任何tick，或者准备更新时，为活动状态
          return this._elapsedTime <= 0 || this._elapsedTime === this.updatePeriod;
        }
        /**
         * 获取到下次更新的剩余时间
         * @returns 剩余时间（秒），如果是每帧更新模式则返回0
         */;
        _proto6.getTimeToNextUpdate = function getTimeToNextUpdate() {
          return this.updatePeriod > 0 ? Math.max(this._elapsedTime, 0) : 0;
        }
        /**
         * 暂停行为树
         */;
        _proto6.pause = function pause() {
          this._paused = true;
        }
        /**
         * 恢复行为树
         */;
        _proto6.resume = function resume() {
          this._paused = false;
        }
        /**
         * 检查是否暂停
         */;
        _proto6.isPaused = function isPaused() {
          return this._paused;
        }
        /**
         * 停止行为树并重置状态
         *
         * @description 暂停行为树并重置所有节点，下次resume后从头开始执行
         */;
        _proto6.stop = function stop() {
          this._paused = true;
          this.reset();
        }
        /**
         * 释放行为树资源
         *
         * @description 递归释放根节点及其所有子节点，清理黑板数据
         * 调用后行为树不应再被使用
         */;
        _proto6.dispose = function dispose() {
          if (this._root) {
            this._root.dispose();
            this._root = null;
          }
          if (this._blackboard) {
            // 清空所有变量
            var variableNames = this._blackboard.getVariableNames();
            for (var _iterator6 = _createForOfIteratorHelperLoose(variableNames), _step6; !(_step6 = _iterator6()).done;) {
              var name = _step6.value;
              this._blackboard.removeVariable(name);
            }
            this._blackboard = null;
          }
          this._context = null;
        };
        _createClass(BehaviorTree, [{
          key: "updatePeriod",
          get: function get() {
            return this._updatePeriod;
          },
          set: function set(value) {
            if (value < 0) {
              throw new Error('更新周期不能为负数');
            }
            var wasFrameMode = this._updatePeriod <= 0;
            var isFrameMode = value <= 0;
            this._updatePeriod = value;
            // 当从每帧模式切换到定时模式时，初始化等待时间
            if (wasFrameMode && !isFrameMode) {
              this._elapsedTime = value; // 设置为完整周期，需要等待
            }
            // 当切换到每帧模式时，清零等待时间
            else if (!wasFrameMode && isFrameMode) {
              this._elapsedTime = 0;
            }
          }
        }]);
        return BehaviorTree;
      }());
      var AbortTypes;
      (function (AbortTypes) {
        /**
         * 没有中止类型。即使其他条件更改了状态，当前操作也将始终运行
         */
        AbortTypes[AbortTypes["None"] = 0] = "None";
        /**
         * 如果一个更重要的有条件的任务改变了状态，它可以发出一个中止指令，使低优先级的任务停止运行，并将控制权转回高优先级的分支。
         * 这种类型应该被设置在作为讨论中的复合体的子体的复合体上。
         * 父复合体将检查它的子体，看它们是否有LowerPriority中止。
         */
        AbortTypes[AbortTypes["LowerPriority"] = 1] = "LowerPriority";
        /**
         * 只有当它们都是复合体的子任务时，条件任务才能中止一个行动任务。
         * 这个AbortType只影响它所设置的实际的Composite，不像LowerPriority会影响其父Composite。
         */
        AbortTypes[AbortTypes["Self"] = 2] = "Self";
        /**
         * 检查LowerPriority和Self aborts
         */
        AbortTypes[AbortTypes["Both"] = 3] = "Both";
      })(AbortTypes || (AbortTypes = {}));
      var AbortTypesExt = /*#__PURE__*/function () {
        function AbortTypesExt() {}
        AbortTypesExt.has = function has(self, check) {
          return (self & check) == check;
        };
        return AbortTypesExt;
      }();
      function isIConditional(obj) {
        return obj && obj.discriminator === 'IConditional';
      }

      /**
       * 检查节点是否为条件装饰器
       * @param node 要检查的节点
       * @returns 如果是条件装饰器则返回true
       */
      function isConditionalDecorator(node) {
        return isIConditional(node) && 'abortType' in node && 'executeConditional' in node && typeof node.executeConditional === 'function';
      }
      /**
       * 复合节点基类
       *
       * 所有复合节点（如Sequence、Selector等）都必须继承此类。
       * 提供子节点管理和中止类型处理的基础功能。
       *
       * @template T 上下文类型
       * @abstract
       */
      var Composite = /*#__PURE__*/function (_Behavior) {
        _inheritsLoose(Composite, _Behavior);
        function Composite() {
          var _this6;
          _this6 = _Behavior.apply(this, arguments) || this;
          /** 中止类型，决定节点在何种情况下会被中止*/
          _this6.abortType = AbortTypes.None;
          /** 子节点数组*/
          _this6._children = new Array();
          /** 是否存在低优先级条件中止 */
          _this6._hasLowerPriorityConditionalAbort = false;
          /** 当前执行的子节点索引 */
          _this6._currentChildIndex = 0;
          return _this6;
        }
        /**
         * 使节点及其所有子节点无效
         *
         * 重写父类方法，递归使所有子节点无效
         */
        var _proto7 = Composite.prototype;
        _proto7.invalidate = function invalidate() {
          _Behavior.prototype.invalidate.call(this);
          var childrenLength = this._children.length;
          for (var i = 0; i < childrenLength; i++) {
            this._children[i].invalidate();
          }
        }
        /**
         * 释放节点及其所有子节点的资源
         *
         * 重写父类方法，递归释放所有子节点
         */;
        _proto7.dispose = function dispose() {
          var childrenLength = this._children.length;
          for (var i = 0; i < childrenLength; i++) {
            this._children[i].dispose();
          }
          this._children.length = 0;
          _Behavior.prototype.dispose.call(this);
        }
        /**
         * 节点开始执行时的初始化
         *
         * 检查是否存在低优先级条件中止，并重置当前子节点索引
         */;
        _proto7.onStart = function onStart() {
          // 检查子节点中是否存在低优先级条件中止
          this._hasLowerPriorityConditionalAbort = this.hasLowerPriorityConditionalAbortInChildren();
          this._currentChildIndex = 0;
        }
        /**
         * 节点执行结束时的清理
         *
         * 使所有子节点无效，为下一次执行做准备
         */;
        _proto7.onEnd = function onEnd() {
          // 使所有子节点无效，为下一帧做准备
          var childrenLength = this._children.length;
          for (var i = 0; i < childrenLength; i++) {
            this._children[i].invalidate();
          }
        }
        /**
         * 检查子节点中是否存在低优先级条件中止
         *
         * 遍历所有子节点，查找设置了LowerPriority中止类型的节点
         *
         * @returns 如果存在低优先级条件中止则返回true，否则返回false
         * @private
         */;
        _proto7.hasLowerPriorityConditionalAbortInChildren = function hasLowerPriorityConditionalAbortInChildren() {
          for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            // 检查条件装饰器的中止类型
            if (isConditionalDecorator(child) && AbortTypesExt.has(child.abortType, AbortTypes.LowerPriority)) {
              return true;
            }
            // 检查复合节点的中止类型
            var composite = child;
            if (composite != null && AbortTypesExt.has(composite.abortType, AbortTypes.LowerPriority)) {
              // 确保第一个子节点是条件节点
              if (composite.isFirstChildConditional()) return true;
            }
          }
          return false;
        }
        /**
         * 添加子节点
         *
         * @param child 要添加的子节点
         */;
        _proto7.addChild = function addChild(child) {
          this._children.push(child);
        }
        /**
         * 检查第一个子节点是否为条件节点
         *
         * 用于处理条件性中止逻辑
         *
         * @returns 如果第一个子节点是条件节点则返回true，否则返回false
         */;
        _proto7.isFirstChildConditional = function isFirstChildConditional() {
          return isIConditional(this._children[0]);
        }
        /**
         * 更新自中止条件节点
         *
         * 检查当前索引之前的条件节点状态变化，支持自中止功能。
         * 当条件节点状态不符合预期时，会重置当前索引并使后续子节点无效。
         *
         * @param context 执行上下文
         * @param statusCheck 期望的状态值
         * @protected
         */;
        _proto7.updateSelfAbortConditional = function updateSelfAbortConditional(context, statusCheck) {
          // 检查当前索引之前的条件节点
          for (var i = 0; i < this._currentChildIndex; i++) {
            var child = this._children[i];
            if (!isIConditional(child)) {
              continue;
            }
            var status = this.updateConditionalNode(context, child);
            if (status !== statusCheck) {
              this._currentChildIndex = i;
              // 中止时使后续子节点无效
              var childrenLength = this._children.length;
              for (var j = i; j < childrenLength; j++) {
                this._children[j].invalidate();
              }
              break;
            }
          }
        }
        /**
         * 更新低优先级中止条件节点
         *
         * 检查具有低优先级中止类型的组合节点，当其条件节点状态发生变化时
         * 执行中止操作。
         *
         * @param context 执行上下文
         * @param statusCheck 期望的状态值
         * @protected
         */;
        _proto7.updateLowerPriorityAbortConditional = function updateLowerPriorityAbortConditional(context, statusCheck) {
          // 检查当前索引之前的低优先级任务
          for (var i = 0; i < this._currentChildIndex; i++) {
            var child = this._children[i];
            // 检查是否为条件装饰器或设置了LowerPriority中止类型的复合节点
            if (isConditionalDecorator(child) && AbortTypesExt.has(child.abortType, AbortTypes.LowerPriority)) {
              // 对于条件装饰器，检查条件本身而不是装饰器的整体状态
              var conditionStatus = child.executeConditional(context, true); // 强制更新条件
              // 对于选择器：当高优先级条件变为Success时，应该中止低优先级任务
              // 对于序列器：当高优先级条件变为Failure时，应该中止低优先级任务
              var shouldAbort = statusCheck === TaskStatus.Failure ? conditionStatus === TaskStatus.Success : conditionStatus === TaskStatus.Failure;
              if (shouldAbort) {
                // 条件满足，需要中止当前执行，回到这个节点
                this._currentChildIndex = i;
                // 中止时使后续子节点无效
                var childrenLength = this._children.length;
                for (var j = i + 1; j < childrenLength; j++) {
                  this._children[j].invalidate();
                }
                break;
              }
            } else {
              // 检查是否为设置了LowerPriority的复合节点
              var composite = child;
              if (composite && AbortTypesExt.has(composite.abortType, AbortTypes.LowerPriority)) {
                // 获取复合节点的第一个子节点作为条件
                var firstChild = composite._children[0];
                if (firstChild && isIConditional(firstChild)) {
                  var status = this.updateConditionalNode(context, firstChild);
                  // 对于选择器：当高优先级条件变为Success时，应该中止低优先级任务
                  // 对于序列器：当高优先级条件变为Failure时，应该中止低优先级任务
                  var _shouldAbort = statusCheck === TaskStatus.Failure ? status === TaskStatus.Success : status === TaskStatus.Failure;
                  if (_shouldAbort) {
                    this._currentChildIndex = i;
                    // 中止时使后续子节点无效
                    var _childrenLength = this._children.length;
                    for (var _j = i + 1; _j < _childrenLength; _j++) {
                      this._children[_j].invalidate();
                    }
                    break;
                  }
                }
              }
            }
          }
        }
        /**
         * 更新条件节点状态
         *
         * 辅助方法，用于获取条件节点或条件装饰器的任务状态
         *
         * @param context 执行上下文
         * @param node 要更新的节点
         * @returns 节点的执行状态
         * @private
         */;
        _proto7.updateConditionalNode = function updateConditionalNode(context, node) {
          // 直接调用节点的update方法获取状态
          return node.update(context);
        };
        return Composite;
      }(Behavior);
      var Decorator = /*#__PURE__*/function (_Behavior2) {
        _inheritsLoose(Decorator, _Behavior2);
        function Decorator() {
          return _Behavior2.apply(this, arguments) || this;
        }
        var _proto8 = Decorator.prototype;
        _proto8.invalidate = function invalidate() {
          var _this$child;
          _Behavior2.prototype.invalidate.call(this);
          (_this$child = this.child) == null || _this$child.invalidate();
        }
        /**
         * 释放节点及其子节点的资源
         *
         * 重写父类方法，释放子节点
         */;
        _proto8.dispose = function dispose() {
          var _this$child2;
          (_this$child2 = this.child) == null || _this$child2.dispose();
          this.child = null;
          _Behavior2.prototype.dispose.call(this);
        };
        return Decorator;
      }(Behavior);
      /**
       * 执行函数动作包装器
       *
       * @description
       * 包装一个函数以便可以作为行为树节点使用，避免为简单逻辑创建子类。
       * 适合快速原型开发和简单的行为逻辑。
       *
       * @template T 上下文类型
       *
       * @example
       * ```typescript
       * // 创建简单的执行动作
       * const moveAction = new ExecuteAction<GameContext>((context) => {
       *   context.player.move();
       *   return TaskStatus.Success;
       * });
       *
       * // 带条件的执行动作
       * const attackAction = new ExecuteAction<GameContext>((context) => {
       *   if (context.enemy.isInRange()) {
       *     context.player.attack();
       *     return TaskStatus.Success;
       *   }
       *   return TaskStatus.Failure;
       * });
       * ```
       */
      var ExecuteAction = /*#__PURE__*/function (_Behavior3) {
        _inheritsLoose(ExecuteAction, _Behavior3);
        /**
         * 创建执行动作
         * @param action 要执行的函数，不能为null
         * @param options 配置选项
         * @throws {Error} 当action为null或undefined时抛出错误
         */
        function ExecuteAction(action, options) {
          var _options$enableErrorH;
          var _this7;
          if (options === void 0) {
            options = {};
          }
          _this7 = _Behavior3.call(this) || this;
          if (action == null) {
            throw new Error('动作函数不能为null或undefined');
          }
          if (typeof action !== 'function') {
            throw new Error('动作必须是一个函数');
          }
          _this7._action = action;
          _this7._enableErrorHandling = (_options$enableErrorH = options.enableErrorHandling) != null ? _options$enableErrorH : true;
          _this7._name = options.name;
          return _this7;
        }
        /**
         * 执行包装的函数
         * @param context 执行上下文
         * @returns 执行结果状态
         */
        var _proto9 = ExecuteAction.prototype;
        _proto9.update = function update(context) {
          if (this._enableErrorHandling) {
            try {
              var result = this._action(context);
              // 验证返回值是否为有效的TaskStatus
              if (!this.isValidTaskStatus(result)) {
                console.error("ExecuteAction " + (this._name || '') + ": \u52A8\u4F5C\u51FD\u6570\u8FD4\u56DE\u4E86\u65E0\u6548\u7684TaskStatus: " + result);
                return TaskStatus.Failure;
              }
              return result;
            } catch (error) {
              var actionName = this._name ? "\"" + this._name + "\"" : '';
              console.error("ExecuteAction " + actionName + " \u6267\u884C\u65F6\u53D1\u751F\u9519\u8BEF:", error);
              return TaskStatus.Failure;
            }
          } else {
            // 高性能模式：跳过错误处理
            return this._action(context);
          }
        }
        /**
         * 验证TaskStatus是否有效
         * @param status 要验证的状态
         * @returns 是否为有效状态
         */;
        _proto9.isValidTaskStatus = function isValidTaskStatus(status) {
          return status === TaskStatus.Success || status === TaskStatus.Failure || status === TaskStatus.Running;
        }
        /**
         * 获取动作名称
         * @returns 动作名称或函数名
         */;
        _proto9.getName = function getName() {
          return this._name || this._action.name || 'Anonymous Action';
        }
        /**
         * 创建一个始终成功的执行动作
         * @param action 要执行的无返回值函数
         * @param name 动作名称
         * @returns 新的ExecuteAction实例
         */;
        ExecuteAction.createAlwaysSuccess = function createAlwaysSuccess(action, name) {
          return new ExecuteAction(function (context) {
            action(context);
            return TaskStatus.Success;
          }, {
            name: name || 'Always Success Action'
          });
        }
        /**
         * 创建一个条件执行动作
         * @param predicate 条件函数
         * @param name 动作名称
         * @returns 新的ExecuteAction实例
         */;
        ExecuteAction.createConditional = function createConditional(predicate, name) {
          return new ExecuteAction(function (context) {
            return predicate(context) ? TaskStatus.Success : TaskStatus.Failure;
          }, {
            name: name || 'Conditional Action'
          });
        };
        return ExecuteAction;
      }(Behavior);
      /**
       * 执行动作条件包装器
       *
       * @description
       * 包装一个ExecuteAction，使其可以作为条件节点使用。
       * 适用于需要将简单的函数逻辑用作条件判断的场景。
       *
       * @template T 上下文类型
       *
       * @example
       * ```typescript
       * // 创建一个检查玩家血量的条件
       * const healthCheck = new ExecuteActionConditional<GameContext>((context) => {
       *   return context.player.health > 50 ? TaskStatus.Success : TaskStatus.Failure;
       * }, { name: 'HealthCheck' });
       *
       * // 创建一个检查敌人距离的条件
       * const enemyInRange = ExecuteActionConditional.createPredicate<GameContext>(
       *   (context) => context.getClosestEnemy()?.distance < 10,
       *   'EnemyInRange'
       * );
       * ```
       */
      var ExecuteActionConditional = /*#__PURE__*/function (_ExecuteAction) {
        _inheritsLoose(ExecuteActionConditional, _ExecuteAction);
        /**
         * 创建执行动作条件
         * @param action 条件判断函数，应返回Success或Failure
         * @param options 配置选项
         */
        function ExecuteActionConditional(action, options) {
          var _this8;
          if (options === void 0) {
            options = {};
          }
          _this8 = _ExecuteAction.call(this, action, options) || this;
          /** 条件节点标识符 */
          _this8.discriminator = "IConditional";
          return _this8;
        }
        /**
         * 创建基于布尔值的条件
         * @param predicate 返回布尔值的判断函数
         * @param name 条件名称
         * @returns 新的ExecuteActionConditional实例
         */
        ExecuteActionConditional.createPredicate = function createPredicate(predicate, name) {
          return new ExecuteActionConditional(function (context) {
            return predicate(context) ? TaskStatus.Success : TaskStatus.Failure;
          }, {
            name: name || 'Predicate Condition'
          });
        }
        /**
         * 创建数值比较条件
         * @param getValue 获取数值的函数
         * @param threshold 阈值
         * @param comparison 比较类型
         * @param name 条件名称
         * @returns 新的ExecuteActionConditional实例
         */;
        ExecuteActionConditional.createNumericComparison = function createNumericComparison(getValue, threshold, comparison, name) {
          var compareFunctions = {
            greater: function greater(value, threshold) {
              return value > threshold;
            },
            less: function less(value, threshold) {
              return value < threshold;
            },
            equal: function equal(value, threshold) {
              return Math.abs(value - threshold) < Number.EPSILON;
            },
            greaterEqual: function greaterEqual(value, threshold) {
              return value >= threshold;
            },
            lessEqual: function lessEqual(value, threshold) {
              return value <= threshold;
            }
          };
          var compareFunc = compareFunctions[comparison];
          var conditionName = name || "Numeric " + comparison + " " + threshold;
          return new ExecuteActionConditional(function (context) {
            try {
              var value = getValue(context);
              if (typeof value !== 'number' || isNaN(value)) {
                console.warn(conditionName + ": getValue\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u6570\u503C: " + value);
                return TaskStatus.Failure;
              }
              return compareFunc(value, threshold) ? TaskStatus.Success : TaskStatus.Failure;
            } catch (error) {
              console.error(conditionName + ": \u83B7\u53D6\u6570\u503C\u65F6\u53D1\u751F\u9519\u8BEF:", error);
              return TaskStatus.Failure;
            }
          }, {
            name: conditionName
          });
        }
        /**
         * 创建属性存在检查条件
         * @param getProperty 获取属性的函数
         * @param name 条件名称
         * @returns 新的ExecuteActionConditional实例
         */;
        ExecuteActionConditional.createPropertyExists = function createPropertyExists(getProperty, name) {
          return new ExecuteActionConditional(function (context) {
            try {
              var property = getProperty(context);
              return property != null ? TaskStatus.Success : TaskStatus.Failure;
            } catch (error) {
              console.error((name || 'Property Check') + ": \u68C0\u67E5\u5C5E\u6027\u65F6\u53D1\u751F\u9519\u8BEF:", error);
              return TaskStatus.Failure;
            }
          }, {
            name: name || 'Property Exists Check'
          });
        }
        /**
         * 创建组合条件（AND逻辑）
         * @param conditions 条件函数数组
         * @param name 条件名称
         * @returns 新的ExecuteActionConditional实例
         */;
        ExecuteActionConditional.createAnd = function createAnd(conditions, name) {
          return new ExecuteActionConditional(function (context) {
            for (var _iterator7 = _createForOfIteratorHelperLoose(conditions), _step7; !(_step7 = _iterator7()).done;) {
              var condition = _step7.value;
              if (!condition(context)) {
                return TaskStatus.Failure;
              }
            }
            return TaskStatus.Success;
          }, {
            name: name || 'AND Condition'
          });
        }
        /**
         * 创建组合条件（OR逻辑）
         * @param conditions 条件函数数组
         * @param name 条件名称
         * @returns 新的ExecuteActionConditional实例
         */;
        ExecuteActionConditional.createOr = function createOr(conditions, name) {
          return new ExecuteActionConditional(function (context) {
            for (var _iterator8 = _createForOfIteratorHelperLoose(conditions), _step8; !(_step8 = _iterator8()).done;) {
              var condition = _step8.value;
              if (condition(context)) {
                return TaskStatus.Success;
              }
            }
            return TaskStatus.Failure;
          }, {
            name: name || 'OR Condition'
          });
        };
        return ExecuteActionConditional;
      }(ExecuteAction);
      /**
       * 黑板比较操作符
       */
      var CompareOperator;
      (function (CompareOperator) {
        CompareOperator["Equal"] = "equal";
        CompareOperator["NotEqual"] = "notEqual";
        CompareOperator["Greater"] = "greater";
        CompareOperator["GreaterOrEqual"] = "greaterOrEqual";
        CompareOperator["Less"] = "less";
        CompareOperator["LessOrEqual"] = "lessOrEqual";
        CompareOperator["Contains"] = "contains";
        CompareOperator["NotContains"] = "notContains";
      })(CompareOperator || (CompareOperator = {}));
      /**
       * 黑板值比较条件
       *
       * @description 比较黑板变量与指定值或另一个黑板变量
       *
       * @example
       * ```typescript
       * // 检查玩家生命值是否大于50
       * const healthCheck = new BlackboardValueComparison<GameContext>(
       *   'playerHealth',
       *   CompareOperator.Greater,
       *   50
       * );
       *
       * // 比较两个黑板变量
       * const compareVars = new BlackboardValueComparison<GameContext>(
       *   'playerHealth',
       *   CompareOperator.Greater,
       *   null,
       *   'enemyHealth'
       * );
       * ```
       */
      var BlackboardValueComparison = /*#__PURE__*/function () {
        function BlackboardValueComparison(variableName, operator, compareValue, compareVariable) {
          if (compareValue === void 0) {
            compareValue = null;
          }
          this.discriminator = 'IConditional';
          this.variableName = variableName;
          this.operator = operator;
          this.compareValue = compareValue;
          this.compareVariable = compareVariable;
        }
        /**
         * 检查条件是否满足
         */
        var _proto10 = BlackboardValueComparison.prototype;
        _proto10.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('BlackboardValueComparison: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          if (!blackboard.hasVariable(this.variableName)) {
            console.warn("BlackboardValueComparison: \u53D8\u91CF \"" + this.variableName + "\" \u4E0D\u5B58\u5728");
            return TaskStatus.Failure;
          }
          var leftValue = blackboard.getValue(this.variableName);
          var rightValue;
          if (this.compareVariable) {
            if (!blackboard.hasVariable(this.compareVariable)) {
              console.warn("BlackboardValueComparison: \u6BD4\u8F83\u53D8\u91CF \"" + this.compareVariable + "\" \u4E0D\u5B58\u5728");
              return TaskStatus.Failure;
            }
            rightValue = blackboard.getValue(this.compareVariable);
          } else {
            rightValue = this.compareValue;
          }
          var result = this._performComparison(leftValue, rightValue, this.operator);
          return result ? TaskStatus.Success : TaskStatus.Failure;
        }
        /**
         * 执行比较操作
         */;
        _proto10._performComparison = function _performComparison(left, right, operator) {
          switch (operator) {
            case CompareOperator.Equal:
              return left === right;
            case CompareOperator.NotEqual:
              return left !== right;
            case CompareOperator.Greater:
              return typeof left === 'number' && typeof right === 'number' && left > right;
            case CompareOperator.GreaterOrEqual:
              return typeof left === 'number' && typeof right === 'number' && left >= right;
            case CompareOperator.Less:
              return typeof left === 'number' && typeof right === 'number' && left < right;
            case CompareOperator.LessOrEqual:
              return typeof left === 'number' && typeof right === 'number' && left <= right;
            case CompareOperator.Contains:
              if (typeof left === 'string' && typeof right === 'string') {
                return left.includes(right);
              }
              if (Array.isArray(left)) {
                return left.includes(right);
              }
              return false;
            case CompareOperator.NotContains:
              if (typeof left === 'string' && typeof right === 'string') {
                return !left.includes(right);
              }
              if (Array.isArray(left)) {
                return !left.includes(right);
              }
              return true;
            default:
              return false;
          }
        };
        return BlackboardValueComparison;
      }();
      /**
       * 黑板变量存在性检查
       *
       * @description 检查指定的黑板变量是否存在且不为null/undefined
       */
      var BlackboardVariableExists = /*#__PURE__*/function () {
        function BlackboardVariableExists(variableName, invert) {
          if (invert === void 0) {
            invert = false;
          }
          this.discriminator = 'IConditional';
          this.variableName = variableName;
          this.invert = invert;
        }
        var _proto11 = BlackboardVariableExists.prototype;
        _proto11.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('BlackboardVariableExists: 上下文中未找到Blackboard实例');
            return this.invert ? TaskStatus.Success : TaskStatus.Failure;
          }
          var exists = blackboard.hasVariable(this.variableName);
          var value = exists ? blackboard.getValue(this.variableName) : undefined;
          var isValid = exists && value !== null && value !== undefined;
          var result = this.invert ? !isValid : isValid;
          return result ? TaskStatus.Success : TaskStatus.Failure;
        };
        return BlackboardVariableExists;
      }();
      /**
       * 黑板变量类型检查
       *
       * @description 检查黑板变量是否为指定类型
       */
      var BlackboardVariableTypeCheck = /*#__PURE__*/function () {
        function BlackboardVariableTypeCheck(variableName, expectedType) {
          this.discriminator = 'IConditional';
          this.variableName = variableName;
          this.expectedType = expectedType;
        }
        var _proto12 = BlackboardVariableTypeCheck.prototype;
        _proto12.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('BlackboardVariableTypeCheck: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          var variableDefinition = blackboard.getVariableDefinition(this.variableName);
          if (!variableDefinition) {
            return TaskStatus.Failure;
          }
          var result = variableDefinition.type === this.expectedType;
          return result ? TaskStatus.Success : TaskStatus.Failure;
        };
        return BlackboardVariableTypeCheck;
      }();
      /**
       * 黑板变量范围检查
       *
       * @description 检查数值型黑板变量是否在指定范围内
       */
      var BlackboardVariableRangeCheck = /*#__PURE__*/function () {
        function BlackboardVariableRangeCheck(variableName, minValue, maxValue) {
          this.discriminator = 'IConditional';
          this.variableName = variableName;
          this.minValue = minValue;
          this.maxValue = maxValue;
        }
        var _proto13 = BlackboardVariableRangeCheck.prototype;
        _proto13.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('BlackboardVariableRangeCheck: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          if (!blackboard.hasVariable(this.variableName)) {
            return TaskStatus.Failure;
          }
          var value = blackboard.getValue(this.variableName);
          if (typeof value !== 'number') {
            return TaskStatus.Failure;
          }
          var result = value >= this.minValue && value <= this.maxValue;
          return result ? TaskStatus.Success : TaskStatus.Failure;
        };
        return BlackboardVariableRangeCheck;
      }();
      /**
       * 条件处理器工厂类
       * @description 专门负责创建各种类型的条件节点，保持代码整洁和可维护性
       */
      var ConditionFactory = /*#__PURE__*/function () {
        function ConditionFactory() {}
        /**
         * 从条件配置创建条件节点
         * @param condition 条件配置
         * @param nodeProperties 父节点的属性（用于条件装饰器）
         * @param context 执行上下文
         * @returns 条件节点实例
         */
        ConditionFactory.createCondition = function createCondition(condition, nodeProperties, context) {
          if (nodeProperties === void 0) {
            nodeProperties = {};
          }
          if (!condition) {
            return new ExecuteActionConditional(function () {
              return TaskStatus.Success;
            });
          }
          switch (condition.type) {
            case 'blackboard-value-comparison':
              return ConditionFactory.createBlackboardComparison(nodeProperties);
            case 'condition-custom':
              return ConditionFactory.createCustomCondition(condition.properties || nodeProperties);
            case 'event-condition':
              return ConditionFactory.createEventCondition(condition.properties || nodeProperties, context);
            default:
              console.warn("\u672A\u77E5\u7684\u6761\u4EF6\u7C7B\u578B: " + condition.type + "\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u6210\u529F\u6761\u4EF6");
              return new ExecuteActionConditional(function () {
                return TaskStatus.Success;
              });
          }
        }
        /**
         * 创建黑板值比较条件
         * @param properties 节点属性
         * @returns 黑板比较条件实例
         */;
        ConditionFactory.createBlackboardComparison = function createBlackboardComparison(properties) {
          // 提取嵌套的属性值
          var variableName = ConditionFactory.extractNestedValue(properties.variableName) || 'variable';
          var operator = ConditionFactory.extractNestedValue(properties.operator) || 'equal';
          var compareValue = ConditionFactory.extractNestedValue(properties.compareValue);
          var compareVariable = ConditionFactory.extractNestedValue(properties.compareVariable);
          // 映射操作符字符串到枚举
          var operatorEnum = ConditionFactory.mapOperatorToEnum(operator);
          // 处理黑板变量引用（如 "{{variableName}}"）
          var cleanVariableName = ConditionFactory.cleanVariableName(variableName);
          var cleanCompareVariable = compareVariable ? ConditionFactory.cleanVariableName(compareVariable) : undefined;
          // 处理类型转换 - 特别是布尔值的字符串表示
          var processedCompareValue = compareValue;
          if (typeof compareValue === 'string') {
            // 如果比较值是字符串，尝试转换为对应的类型
            if (compareValue.toLowerCase() === 'true') {
              processedCompareValue = true;
            } else if (compareValue.toLowerCase() === 'false') {
              processedCompareValue = false;
            } else if (!isNaN(Number(compareValue)) && compareValue.trim() !== '') {
              // 如果是数字字符串，转换为数字
              processedCompareValue = Number(compareValue);
            }
          }
          return new BlackboardValueComparison(cleanVariableName, operatorEnum, processedCompareValue, cleanCompareVariable);
        }
        /**
         * 创建自定义条件
         * @param properties 条件属性
         * @returns 自定义条件实例
         */;
        ConditionFactory.createCustomCondition = function createCustomCondition(properties) {
          if (properties === void 0) {
            properties = {};
          }
          var conditionCodeConfig = properties.conditionCode;
          var conditionCode = typeof conditionCodeConfig === 'string' ? conditionCodeConfig : typeof conditionCodeConfig === 'object' && conditionCodeConfig && 'value' in conditionCodeConfig ? String(conditionCodeConfig.value) : undefined;
          if (conditionCode && typeof conditionCode === 'string') {
            try {
              var condFunc = new Function('context', "\n                    try {\n                        return (" + conditionCode + ")(context);\n                    } catch (error) {\n                        console.error('\u81EA\u5B9A\u4E49\u6761\u4EF6\u51FD\u6570\u6267\u884C\u9519\u8BEF:', error);\n                        return false;\n                    }\n                ");
              return new ExecuteActionConditional(function (ctx) {
                try {
                  var result = condFunc(ctx);
                  return result ? TaskStatus.Success : TaskStatus.Failure;
                } catch (error) {
                  console.error('自定义条件函数执行失败:', error);
                  return TaskStatus.Failure;
                }
              });
            } catch (error) {
              console.warn('解析自定义条件函数失败:', error);
            }
          }
          return new ExecuteActionConditional(function () {
            return TaskStatus.Failure;
          });
        }
        /**
         * 创建事件条件
         * @param properties 条件属性
         * @param context 执行上下文
         * @returns 事件条件实例
         */;
        ConditionFactory.createEventCondition = function createEventCondition(properties, context) {
          if (properties === void 0) {
            properties = {};
          }
          var eventName = ConditionFactory.extractNestedValue(properties.eventName);
          if (!eventName || typeof eventName !== 'string') {
            console.warn('[event-condition] 缺少有效的 eventName 属性');
            return new ExecuteActionConditional(function () {
              return TaskStatus.Failure;
            });
          }
          return new ExecuteActionConditional(function (ctx) {
            try {
              var _eventRegistry$handle;
              // 从上下文中获取事件注册表
              var eventRegistry = ctx.eventRegistry;
              if (!eventRegistry) {
                console.warn("[event-condition] \u672A\u627E\u5230\u4E8B\u4EF6\u6CE8\u518C\u8868\uFF0C\u8BF7\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u63D0\u4F9B eventRegistry");
                return TaskStatus.Failure;
              }
              // 获取条件处理器
              var checker = eventRegistry.getConditionHandler ? eventRegistry.getConditionHandler(eventName) : (_eventRegistry$handle = eventRegistry.handlers) == null ? void 0 : _eventRegistry$handle.get(eventName);
              if (!checker) {
                console.warn("[event-condition] \u672A\u627E\u5230\u6761\u4EF6\u5904\u7406\u5668: " + eventName);
                return TaskStatus.Failure;
              }
              // 解析参数
              var parameters = {};
              var parametersValue = ConditionFactory.extractNestedValue(properties.parameters);
              if (parametersValue) {
                if (typeof parametersValue === 'string') {
                  try {
                    parameters = JSON.parse(parametersValue);
                  } catch (e) {
                    console.warn("[event-condition] \u53C2\u6570\u89E3\u6790\u5931\u8D25: " + parametersValue);
                  }
                } else {
                  parameters = parametersValue;
                }
                // 支持黑板变量替换
                var blackboard = ctx.blackboard;
                if (blackboard) {
                  parameters = ConditionFactory.replaceBlackboardVariables(parameters, blackboard);
                }
              }
              // 执行条件检查
              var result = checker(ctx, parameters);
              // 处理异步结果
              if (result instanceof Promise) {
                console.warn("[event-condition] \u6761\u4EF6 " + eventName + " \u8FD4\u56DEPromise\uFF0C\u6761\u4EF6\u8282\u70B9\u4E0D\u652F\u6301\u5F02\u6B65\u64CD\u4F5C");
                return TaskStatus.Failure;
              }
              return result ? TaskStatus.Success : TaskStatus.Failure;
            } catch (error) {
              console.error("[event-condition] \u6761\u4EF6 " + eventName + " \u68C0\u67E5\u5931\u8D25:", error);
              return TaskStatus.Failure;
            }
          });
        }
        /**
         * 映射操作符字符串到枚举
         * @param operator 操作符字符串
         * @returns 操作符枚举值
         */;
        ConditionFactory.mapOperatorToEnum = function mapOperatorToEnum(operator) {
          switch (operator.toLowerCase()) {
            case 'equal':
              return CompareOperator.Equal;
            case 'notequal':
            case 'not_equal':
              return CompareOperator.NotEqual;
            case 'greater':
              return CompareOperator.Greater;
            case 'greaterorequal':
            case 'greater_or_equal':
              return CompareOperator.GreaterOrEqual;
            case 'less':
              return CompareOperator.Less;
            case 'lessorequal':
            case 'less_or_equal':
              return CompareOperator.LessOrEqual;
            case 'contains':
              return CompareOperator.Contains;
            case 'notcontains':
            case 'not_contains':
              return CompareOperator.NotContains;
            default:
              return CompareOperator.Equal;
          }
        }
        /**
         * 清理变量名，移除黑板变量引用语法
         * @param variableName 原始变量名
         * @returns 清理后的变量名
         */;
        ConditionFactory.cleanVariableName = function cleanVariableName(variableName) {
          if (typeof variableName !== 'string') {
            return String(variableName);
          }
          return variableName.replace(/^\{\{|\}\}$/g, '');
        }
        /**
         * 提取嵌套属性值
         * @description 处理编辑器生成的嵌套属性结构
         * @param prop 属性配置对象或直接值
         * @returns 提取的值
         */;
        ConditionFactory.extractNestedValue = function extractNestedValue(prop) {
          if (prop === null || prop === undefined) {
            return prop;
          }
          // 如果是简单值，直接返回
          if (typeof prop !== 'object') {
            return prop;
          }
          // 如果有value属性，递归提取
          if ('value' in prop) {
            return ConditionFactory.extractNestedValue(prop.value);
          }
          return prop;
        }
        /**
         * 替换黑板变量引用
         * @param obj 要处理的对象
         * @param blackboard 黑板实例
         * @returns 处理后的对象
         */;
        ConditionFactory.replaceBlackboardVariables = function replaceBlackboardVariables(obj, blackboard) {
          if (typeof obj === 'string') {
            // 匹配 {{variableName}} 格式的变量引用
            return obj.replace(/\{\{([^}]+)\}\}/g, function (match, variableName) {
              var value = blackboard.get ? blackboard.get(variableName) : blackboard[variableName];
              return value !== undefined ? value : match;
            });
          } else if (Array.isArray(obj)) {
            return obj.map(function (item) {
              return ConditionFactory.replaceBlackboardVariables(item, blackboard);
            });
          } else if (obj && typeof obj === 'object') {
            var result = {};
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                result[key] = ConditionFactory.replaceBlackboardVariables(obj[key], blackboard);
              }
            }
            return result;
          }
          return obj;
        };
        return ConditionFactory;
      }();
      /**
       * 简单的任务，它将输出指定的文本并返回成功。 它可以用于调试。
       */
      var LogAction = /*#__PURE__*/function (_Behavior4) {
        _inheritsLoose(LogAction, _Behavior4);
        function LogAction(text) {
          var _this9;
          _this9 = _Behavior4.call(this) || this;
          /** 是否输出error还是log */
          _this9.isError = false;
          _this9.text = text;
          return _this9;
        }
        var _proto14 = LogAction.prototype;
        _proto14.update = function update(_context) {
          if (this.isError) console.error(this.text);else console.log(this.text);
          return TaskStatus.Success;
        };
        return LogAction;
      }(Behavior);
      /**
       * 类型守卫：检查对象是否包含时间信息
       * @param obj 要检查的对象
       * @returns 是否为时间上下文对象
       */
      function hasTimeContext(obj) {
        return obj != null && typeof obj === 'object' && 'deltaTime' in obj && typeof obj.deltaTime === 'number';
      }
      /**
       * 等待指定时间的行为节点
       *
       * @description
       * 在指定时间内返回Running状态，时间到达后返回Success状态。
       * 支持外部时间管理以提高性能。
       *
       * @template T 上下文类型
       *
       * @example
       * ```typescript
       * // 基本用法
       * const waitAction = new WaitAction<any>(2.0); // 等待2秒
       *
       * // 使用外部时间管理
       * interface GameContext extends ITimeContext {
       *   player: Player;
       *   deltaTime: number;
       * }
       * const waitAction = new WaitAction<GameContext>(1.5, true);
       * ```
       */
      var WaitAction = /*#__PURE__*/function (_Behavior5) {
        _inheritsLoose(WaitAction, _Behavior5);
        /**
         * 创建等待动作
         * @param waitTime 等待时间（秒），必须大于0
         * @param useExternalTime 是否使用外部时间管理，默认false
         * @throws {Error} 当waitTime小于等于0时抛出错误
         */
        function WaitAction(waitTime, useExternalTime) {
          var _this10;
          if (useExternalTime === void 0) {
            useExternalTime = false;
          }
          _this10 = _Behavior5.call(this) || this;
          /** 已等待的时间（秒） */
          _this10._elapsedTime = 0;
          /** 是否使用外部时间管理 */
          _this10._useExternalTime = false;
          /** 上次更新的时间戳（用于内部时间计算） */
          _this10._lastUpdateTime = 0;
          if (waitTime <= 0) {
            throw new Error('等待时间必须大于0');
          }
          _this10.waitTime = waitTime;
          _this10._useExternalTime = useExternalTime;
          return _this10;
        }
        var _proto15 = WaitAction.prototype;
        _proto15.onStart = function onStart() {
          this._elapsedTime = 0;
          this._lastUpdateTime = performance.now() / 1000;
        }
        /**
         * 更新等待状态
         * @param context 上下文对象，如果包含deltaTime属性则使用外部时间
         * @returns 当前执行状态
         */;
        _proto15.update = function update(context) {
          var deltaTime;
          if (this._useExternalTime && hasTimeContext(context)) {
            // 使用外部提供的deltaTime
            deltaTime = context.deltaTime;
            // 验证deltaTime的有效性
            if (deltaTime < 0 || !isFinite(deltaTime)) {
              console.warn('WaitAction: 无效的deltaTime值，回退到内部时间计算');
              deltaTime = this._calculateInternalDeltaTime();
            }
          } else {
            // 使用内部时间计算
            deltaTime = this._calculateInternalDeltaTime();
          }
          this._elapsedTime += deltaTime;
          if (this._elapsedTime >= this.waitTime) {
            return TaskStatus.Success;
          }
          return TaskStatus.Running;
        }
        /**
         * 计算内部时间差
         * @returns 时间差（秒）
         */;
        _proto15._calculateInternalDeltaTime = function _calculateInternalDeltaTime() {
          var currentTime = performance.now() / 1000;
          var deltaTime = currentTime - this._lastUpdateTime;
          this._lastUpdateTime = currentTime;
          // 防止异常大的时间跳跃（比如页面失焦后恢复）
          return Math.min(deltaTime, 0.1); // 最大100ms
        }
        /**
         * 获取等待进度（0-1）
         * @returns 当前进度百分比
         */;
        _proto15.getProgress = function getProgress() {
          return Math.min(this._elapsedTime / this.waitTime, 1.0);
        }
        /**
         * 获取剩余等待时间
         * @returns 剩余时间（秒）
         */;
        _proto15.getRemainingTime = function getRemainingTime() {
          return Math.max(this.waitTime - this._elapsedTime, 0);
        }
        /**
         * 设置新的等待时间
         * @param newWaitTime 新的等待时间（秒）
         * @param resetProgress 是否重置当前进度，默认false
         * @throws {Error} 当newWaitTime小于等于0时抛出错误
         */;
        _proto15.setWaitTime = function setWaitTime(newWaitTime, resetProgress) {
          if (resetProgress === void 0) {
            resetProgress = false;
          }
          if (newWaitTime <= 0) {
            throw new Error('等待时间必须大于0');
          }
          this.waitTime = newWaitTime;
          if (resetProgress) {
            this._elapsedTime = 0;
            this._lastUpdateTime = performance.now() / 1000;
          }
        }
        /**
         * 检查是否已完成等待
         * @returns 是否已完成
         */;
        _proto15.isCompleted = function isCompleted() {
          return this._elapsedTime >= this.waitTime;
        };
        return WaitAction;
      }(Behavior);
      /**
       * 作为子项运行整个BehaviorTree并返回成功
       */
      var BehaviorTreeReference = /*#__PURE__*/function (_Behavior6) {
        _inheritsLoose(BehaviorTreeReference, _Behavior6);
        function BehaviorTreeReference(tree) {
          var _this11;
          _this11 = _Behavior6.call(this) || this;
          _this11._childTree = tree;
          return _this11;
        }
        var _proto16 = BehaviorTreeReference.prototype;
        _proto16.update = function update(_context) {
          this._childTree.tick();
          return TaskStatus.Success;
        };
        return BehaviorTreeReference;
      }(Behavior);
      /**
       * 装饰器，只有在满足条件的情况下才会运行其子程序。
       * 默认情况下，该条件将在每一次执行中被重新评估
       */
      var ConditionalDecorator = /*#__PURE__*/function (_Decorator) {
        _inheritsLoose(ConditionalDecorator, _Decorator);
        function ConditionalDecorator(conditional, shouldReevalute, abortType) {
          var _this12;
          if (shouldReevalute === void 0) {
            shouldReevalute = true;
          }
          if (abortType === void 0) {
            abortType = AbortTypes.None;
          }
          _this12 = _Decorator.call(this) || this;
          _this12.discriminator = "IConditional";
          /** 中止类型，决定节点在何种情况下会被中止 */
          _this12.abortType = AbortTypes.None;
          _this12._conditionalStatus = TaskStatus.Invalid;
          if (!isIConditional(conditional)) {
            throw new Error("conditional 必须继承 IConditional");
          }
          _this12._conditional = conditional;
          _this12._shouldReevaluate = shouldReevalute;
          _this12.abortType = abortType;
          return _this12;
        }
        var _proto17 = ConditionalDecorator.prototype;
        _proto17.invalidate = function invalidate() {
          _Decorator.prototype.invalidate.call(this);
          this._conditionalStatus = TaskStatus.Invalid;
        };
        _proto17.onStart = function onStart() {
          this._conditionalStatus = TaskStatus.Invalid;
        };
        _proto17.update = function update(context) {
          if (!this.child) {
            throw new Error("child不能为空");
          }
          // 如果子节点正在运行且shouldReevaluate为false，直接继续执行子节点
          if (!this._shouldReevaluate && this.child.status === TaskStatus.Running) {
            return this.child.tick(context);
          }
          // 否则正常评估条件
          this._conditionalStatus = this.executeConditional(context);
          if (this._conditionalStatus == TaskStatus.Success) {
            var childStatus = this.child.tick(context);
            return childStatus;
          }
          return TaskStatus.Failure;
        }
        /**
         * 在shouldReevaluate标志之后执行条件，或者用一个选项来强制更新。
         * 终止将强制更新，以确保他们在条件变化时得到适当的数据。
         */;
        _proto17.executeConditional = function executeConditional(context, forceUpdate) {
          if (forceUpdate === void 0) {
            forceUpdate = false;
          }
          if (forceUpdate || this._shouldReevaluate || this._conditionalStatus == TaskStatus.Invalid) this._conditionalStatus = this._conditional.update(context);
          return this._conditionalStatus;
        };
        return ConditionalDecorator;
      }(Decorator);
      /**
       * 将总是返回失败，除了当子任务正在运行时
       */
      var AlwaysFail = /*#__PURE__*/function (_Decorator2) {
        _inheritsLoose(AlwaysFail, _Decorator2);
        function AlwaysFail() {
          return _Decorator2.apply(this, arguments) || this;
        }
        var _proto18 = AlwaysFail.prototype;
        _proto18.update = function update(context) {
          if (!this.child) {
            throw new Error("child必须不能为空");
          }
          var status = this.child.update(context);
          if (status == TaskStatus.Running) return TaskStatus.Running;
          return TaskStatus.Failure;
        };
        return AlwaysFail;
      }(Decorator);
      /**
       *  将总是返回成功，除了当子任务正在运行时
       */
      var AlwaysSucceed = /*#__PURE__*/function (_Decorator3) {
        _inheritsLoose(AlwaysSucceed, _Decorator3);
        function AlwaysSucceed() {
          return _Decorator3.apply(this, arguments) || this;
        }
        var _proto19 = AlwaysSucceed.prototype;
        _proto19.update = function update(context) {
          if (!this.child) {
            throw new Error("child必须不能为空");
          }
          var status = this.child.update(context);
          if (status == TaskStatus.Running) return TaskStatus.Running;
          return TaskStatus.Success;
        };
        return AlwaysSucceed;
      }(Decorator);
      /**
       * 反转结果的子节点
       */
      var Inverter = /*#__PURE__*/function (_Decorator4) {
        _inheritsLoose(Inverter, _Decorator4);
        function Inverter() {
          return _Decorator4.apply(this, arguments) || this;
        }
        var _proto20 = Inverter.prototype;
        _proto20.update = function update(context) {
          if (!this.child) {
            throw new Error("child必须不能为空");
          }
          var status = this.child.tick(context);
          if (status == TaskStatus.Success) return TaskStatus.Failure;
          if (status == TaskStatus.Failure) return TaskStatus.Success;
          return TaskStatus.Running;
        };
        return Inverter;
      }(Decorator);
      /**
       * 重复执行装饰器
       *
       * @description
       * 重复执行其子节点，直到达到指定次数或条件满足。
       * 支持无限重复、失败时停止等多种模式。
       *
       * @template T 上下文类型
       *
       * @example
       * ```typescript
       * // 重复3次
       * const repeater = new Repeater<GameContext>(3);
       * repeater.child = new AttackAction();
       *
       * // 无限重复，失败时停止
       * const infiniteRepeater = new Repeater<GameContext>(-1, true);
       *
       * // 重复直到成功
       * const untilSuccess = Repeater.createUntilSuccess<GameContext>();
       * ```
       */
      var Repeater = /*#__PURE__*/function (_Decorator5) {
        _inheritsLoose(Repeater, _Decorator5);
        /**
         * 创建重复装饰器
         * @param count 重复次数，-1表示无限重复，必须是整数
         * @param endOnFailure 子节点失败时是否停止，默认false
         * @param endOnSuccess 子节点成功时是否停止，默认false
         * @throws {Error} 当count不是有效整数时抛出错误
         */
        function Repeater(count, endOnFailure, endOnSuccess) {
          var _this13;
          if (endOnFailure === void 0) {
            endOnFailure = false;
          }
          if (endOnSuccess === void 0) {
            endOnSuccess = false;
          }
          _this13 = _Decorator5.call(this) || this;
          /** 当前已执行的迭代次数 */
          _this13._iterationCount = 0;
          /** 最后一次子节点的执行结果 */
          _this13._lastChildStatus = TaskStatus.Invalid;
          if (!Number.isInteger(count) || count < -1 || count === 0) {
            throw new Error('重复次数必须是正整数或-1（无限重复）');
          }
          _this13.count = count;
          _this13.endOnFailure = endOnFailure;
          _this13.endOnSuccess = endOnSuccess;
          return _this13;
        }
        /**
         * 是否永远重复
         */
        var _proto21 = Repeater.prototype;
        _proto21.onStart = function onStart() {
          this._iterationCount = 0;
          this._lastChildStatus = TaskStatus.Invalid;
        };
        _proto21.update = function update(context) {
          if (!this.child) {
            throw new Error('子节点不能为空');
          }
          // 检查是否已经达到重复次数（非无限重复的情况）
          if (!this.repeatForever && this._iterationCount >= this.count) {
            return TaskStatus.Success;
          }
          // 执行子节点
          var status = this.child.tick(context);
          this._lastChildStatus = status;
          // 如果子节点仍在运行，继续等待
          if (status === TaskStatus.Running) {
            return TaskStatus.Running;
          }
          // 子节点完成了一次执行
          this._iterationCount++;
          // 检查停止条件
          if (this.endOnFailure && status === TaskStatus.Failure) {
            return TaskStatus.Success;
          }
          if (this.endOnSuccess && status === TaskStatus.Success) {
            return TaskStatus.Success;
          }
          // 检查是否已经达到重复次数
          if (!this.repeatForever && this._iterationCount >= this.count) {
            return TaskStatus.Success;
          }
          // 重置子节点状态以便下次执行
          this.child.invalidate();
          return TaskStatus.Running;
        }
        /**
         * 获取当前执行次数
         * @returns 已执行的次数
         */;
        _proto21.getIterationCount = function getIterationCount() {
          return this._iterationCount;
        }
        /**
         * 获取剩余执行次数
         * @returns 剩余次数，无限重复时返回-1
         */;
        _proto21.getRemainingCount = function getRemainingCount() {
          if (this.repeatForever) {
            return -1;
          }
          return Math.max(0, this.count - this._iterationCount);
        }
        /**
         * 获取执行进度（0-1）
         * @returns 进度百分比，无限重复时返回-1
         */;
        _proto21.getProgress = function getProgress() {
          if (this.repeatForever) {
            return -1;
          }
          return Math.min(this._iterationCount / this.count, 1.0);
        }
        /**
         * 获取最后一次子节点的执行结果
         * @returns 最后的执行状态
         */;
        _proto21.getLastChildStatus = function getLastChildStatus() {
          return this._lastChildStatus;
        }
        /**
         * 重置重复器状态
         */;
        _proto21.reset = function reset() {
          this._iterationCount = 0;
          this._lastChildStatus = TaskStatus.Invalid;
          if (this.child) {
            this.child.invalidate();
          }
        }
        /**
         * 创建一个重复直到成功的装饰器
         * @param maxAttempts 最大尝试次数，-1表示无限
         * @returns 新的Repeater实例
         */;
        Repeater.createUntilSuccess = function createUntilSuccess(maxAttempts) {
          if (maxAttempts === void 0) {
            maxAttempts = -1;
          }
          return new Repeater(maxAttempts, false, true);
        }
        /**
         * 创建一个重复直到失败的装饰器
         * @param maxAttempts 最大尝试次数，-1表示无限
         * @returns 新的Repeater实例
         */;
        Repeater.createUntilFailure = function createUntilFailure(maxAttempts) {
          if (maxAttempts === void 0) {
            maxAttempts = -1;
          }
          return new Repeater(maxAttempts, true, false);
        }
        /**
         * 创建一个无限重复的装饰器
         * @returns 新的Repeater实例
         */;
        Repeater.createInfinite = function createInfinite() {
          return new Repeater(-1, false, false);
        };
        _createClass(Repeater, [{
          key: "repeatForever",
          get: function get() {
            return this.count === -1;
          }
          /**
           * 设置是否永远重复
           */,
          set: function set(value) {
            this.count = value ? -1 : Math.max(1, this.count);
          }
        }]);
        return Repeater;
      }(Decorator);
      /**
       * 将继续执行其子任务，直到子任务返回失败
       */
      var UntilFail = /*#__PURE__*/function (_Decorator6) {
        _inheritsLoose(UntilFail, _Decorator6);
        function UntilFail() {
          return _Decorator6.apply(this, arguments) || this;
        }
        var _proto22 = UntilFail.prototype;
        _proto22.update = function update(context) {
          if (!this.child) {
            throw new Error("child必须不为空");
          }
          var status = this.child.update(context);
          if (status != TaskStatus.Failure) return TaskStatus.Running;
          return TaskStatus.Success;
        };
        return UntilFail;
      }(Decorator);
      /**
       * 将继续执行其子任务，直到子任务返回成功
       */
      var UntilSuccess = /*#__PURE__*/function (_Decorator7) {
        _inheritsLoose(UntilSuccess, _Decorator7);
        function UntilSuccess() {
          return _Decorator7.apply(this, arguments) || this;
        }
        var _proto23 = UntilSuccess.prototype;
        _proto23.update = function update(context) {
          if (!this.child) {
            throw new Error("child必须不为空");
          }
          var status = this.child.update(context);
          if (status != TaskStatus.Success) return TaskStatus.Running;
          return TaskStatus.Success;
        };
        return UntilSuccess;
      }(Decorator);
      /**
       * 并行组合器
       *
       * @description
       * 同时执行所有子节点，直到满足终止条件：
       * - 任何子节点失败时返回失败
       * - 所有子节点成功时返回成功
       * - 其他情况返回运行中
       *
       * @template T 上下文类型
       */
      var Parallel = /*#__PURE__*/function (_Composite) {
        _inheritsLoose(Parallel, _Composite);
        function Parallel() {
          var _this14;
          _this14 = _Composite.apply(this, arguments) || this;
          /** 缓存的子节点数量，避免重复访问length属性*/
          _this14._childCount = 0;
          return _this14;
        }
        var _proto24 = Parallel.prototype;
        _proto24.onStart = function onStart() {
          _Composite.prototype.onStart.call(this);
          this._childCount = this._children.length;
        };
        _proto24.update = function update(context) {
          if (this._childCount === 0) {
            return TaskStatus.Success;
          }
          var successCount = 0;
          // 使用缓存的长度和提前退出优化
          for (var i = 0; i < this._childCount; i++) {
            var child = this._children[i];
            child.tick(context);
            var status = child.status;
            // 提前退出：任何子节点失败立即返回失败
            if (status === TaskStatus.Failure) {
              return TaskStatus.Failure;
            }
            // 计数成功的子节点
            if (status === TaskStatus.Success) {
              successCount++;
            }
          }
          // 所有子节点都成功
          if (successCount === this._childCount) {
            return TaskStatus.Success;
          }
          return TaskStatus.Running;
        }
        /**
         * 添加子节点时更新缓存
         */;
        _proto24.addChild = function addChild(child) {
          _Composite.prototype.addChild.call(this, child);
          this._childCount = this._children.length;
        };
        return Parallel;
      }(Composite);
      /**
       * 并行选择器
       *
       * @description
       * 同时执行所有子节点，直到满足终止条件：
       * - 任何子节点成功时返回成功
       * - 所有子节点失败时返回失败
       * - 其他情况返回运行中
       *
       * @template T 上下文类型
       */
      var ParallelSelector = /*#__PURE__*/function (_Composite2) {
        _inheritsLoose(ParallelSelector, _Composite2);
        function ParallelSelector() {
          var _this15;
          _this15 = _Composite2.apply(this, arguments) || this;
          /** 缓存的子节点数量，避免重复访问length属性*/
          _this15._childCount = 0;
          return _this15;
        }
        var _proto25 = ParallelSelector.prototype;
        _proto25.onStart = function onStart() {
          _Composite2.prototype.onStart.call(this);
          this._childCount = this._children.length;
        };
        _proto25.update = function update(context) {
          if (this._childCount === 0) {
            return TaskStatus.Failure;
          }
          var failureCount = 0;
          // 使用缓存的长度和提前退出优化
          for (var i = 0; i < this._childCount; i++) {
            var child = this._children[i];
            child.tick(context);
            var status = child.status;
            // 提前退出：任何子节点成功立即返回成功
            if (status === TaskStatus.Success) {
              return TaskStatus.Success;
            }
            // 计数失败的子节点
            if (status === TaskStatus.Failure) {
              failureCount++;
            }
          }
          // 所有子节点都失败
          if (failureCount === this._childCount) {
            return TaskStatus.Failure;
          }
          return TaskStatus.Running;
        }
        /**
         * 添加子节点时更新缓存
         */;
        _proto25.addChild = function addChild(child) {
          _Composite2.prototype.addChild.call(this, child);
          this._childCount = this._children.length;
        };
        return ParallelSelector;
      }(Composite);
      /**
       * 选择器组合器
       *
       * @description
       * 类似于逻辑"或"操作，按顺序执行子节点直到找到成功的节点：
       * - 任何子节点成功时返回成功
       * - 所有子节点失败时返回失败
       * - 子节点运行中时返回运行中
       *
       * @template T 上下文类型
       */
      var Selector = /*#__PURE__*/function (_Composite3) {
        _inheritsLoose(Selector, _Composite3);
        function Selector(abortType) {
          var _this16;
          if (abortType === void 0) {
            abortType = AbortTypes.None;
          }
          _this16 = _Composite3.call(this) || this;
          /** 缓存的子节点数量，避免重复访问length属性*/
          _this16._childCount = 0;
          _this16.abortType = abortType;
          return _this16;
        }
        var _proto26 = Selector.prototype;
        _proto26.onStart = function onStart() {
          _Composite3.prototype.onStart.call(this);
          this._childCount = this._children.length;
          // 确保每次开始时都从第一个子节点开始
          this._currentChildIndex = 0;
        };
        _proto26.update = function update(context) {
          // 检查是否有子节点
          if (this._childCount === 0) {
            return TaskStatus.Failure;
          }
          // 处理条件性中止
          if (this._currentChildIndex !== 0) {
            this.handleConditionalAborts(context);
          }
          // 确保索引有效
          if (this._currentChildIndex >= this._childCount) {
            this._currentChildIndex = 0;
            return TaskStatus.Failure;
          }
          var current = this._children[this._currentChildIndex];
          var status = current.tick(context);
          // 如果子节点成功或仍在运行，直接返回
          if (status !== TaskStatus.Failure) {
            return status;
          }
          this._currentChildIndex++;
          // 如果已经是最后一个子节点，整个选择器失败
          if (this._currentChildIndex >= this._childCount) {
            this._currentChildIndex = 0;
            return TaskStatus.Failure;
          }
          return TaskStatus.Running;
        }
        /**
         * 重写invalidate方法，确保在节点无效化时重置索引
         */;
        _proto26.invalidate = function invalidate() {
          _Composite3.prototype.invalidate.call(this);
          this._currentChildIndex = 0;
        }
        /**
         * 添加子节点时更新缓存
         */;
        _proto26.addChild = function addChild(child) {
          _Composite3.prototype.addChild.call(this, child);
          this._childCount = this._children.length;
        }
        /**
         * 处理条件性中止
         */;
        _proto26.handleConditionalAborts = function handleConditionalAborts(context) {
          // 检查低优先级任务的状态变化
          if (this._hasLowerPriorityConditionalAbort) {
            this.updateLowerPriorityAbortConditional(context, TaskStatus.Failure);
          }
          // 检查自中止条件
          if (AbortTypesExt.has(this.abortType, AbortTypes.Self)) {
            this.updateSelfAbortConditional(context, TaskStatus.Failure);
          }
        };
        return Selector;
      }(Composite);
      /**
       * 随机选择器节点
       *
       * @description
       * 与Selector相同的执行逻辑，但在开始时会随机打乱子节点的执行顺序。
       * 适用于需要随机化选择优先级的场景，增加AI决策的多样性。
       *
       * @template T 上下文类型
       *
       * @example
       * ```typescript
       * // 创建一个随机选择攻击方式的选择器
       * const randomAttack = new RandomSelector<GameContext>();
       * randomAttack.addChild(new MeleeAttack());
       * randomAttack.addChild(new RangedAttack());
       * randomAttack.addChild(new SpecialAttack());
       * // 每次执行时，攻击方式的优先级都会被随机打乱
       * ```
       */
      var RandomSelector = /*#__PURE__*/function (_Selector) {
        _inheritsLoose(RandomSelector, _Selector);
        /**
         * 创建随机选择器节点
         * @param abortType 中止类型，默认为None
         * @param reshuffleOnRestart 是否在每次重新开始时都重新洗牌，默认true
         */
        function RandomSelector(abortType, reshuffleOnRestart) {
          var _this17;
          if (abortType === void 0) {
            abortType = AbortTypes.None;
          }
          if (reshuffleOnRestart === void 0) {
            reshuffleOnRestart = true;
          }
          _this17 = _Selector.call(this, abortType) || this;
          /** 原始子节点顺序的备份 */
          _this17._originalOrder = null;
          _this17._reshuffleOnRestart = reshuffleOnRestart;
          return _this17;
        }
        /**
         * 节点开始时的处理
         * 随机打乱子节点顺序
         */
        var _proto27 = RandomSelector.prototype;
        _proto27.onStart = function onStart() {
          // 首先调用父类的onStart方法，重置_currentChildIndex
          _Selector.prototype.onStart.call(this);
          // 备份原始顺序（仅在第一次时）
          if (this._originalOrder === null && this._children.length > 0) {
            this._originalOrder = [].concat(this._children);
          }
          // 只有在有多个子节点时才进行洗牌
          if (this._children.length > 1) {
            try {
              ArrayExt.shuffle(this._children);
            } catch (error) {
              console.error('RandomSelector: 洗牌子节点时发生错误:', error);
              // 如果洗牌失败，恢复原始顺序
              if (this._originalOrder) {
                this._children = [].concat(this._originalOrder);
              }
            }
          }
        }
        /**
         * 重置节点状态
         * 如果启用了reshuffleOnRestart，会在下次开始时重新洗牌
         */;
        _proto27.invalidate = function invalidate() {
          _Selector.prototype.invalidate.call(this);
          // 如果不需要每次重启都洗牌，恢复原始顺序
          if (!this._reshuffleOnRestart && this._originalOrder) {
            this._children = [].concat(this._originalOrder);
          }
        }
        /**
         * 设置是否在重新开始时重新洗牌
         * @param enabled 是否启用
         */;
        _proto27.setReshuffleOnRestart = function setReshuffleOnRestart(enabled) {
          this._reshuffleOnRestart = enabled;
        }
        /**
         * 获取是否在重新开始时重新洗牌
         * @returns 当前设置
         */;
        _proto27.getReshuffleOnRestart = function getReshuffleOnRestart() {
          return this._reshuffleOnRestart;
        }
        /**
         * 恢复原始子节点顺序
         * @description 将子节点顺序恢复到添加时的原始顺序
         */;
        _proto27.restoreOriginalOrder = function restoreOriginalOrder() {
          if (this._originalOrder) {
            this._children = [].concat(this._originalOrder);
          }
        }
        /**
         * 手动重新洗牌子节点
         * @description 立即重新洗牌子节点顺序，不等待下次开始
         */;
        _proto27.reshuffleNow = function reshuffleNow() {
          if (this._children.length > 1) {
            try {
              ArrayExt.shuffle(this._children);
            } catch (error) {
              console.error('RandomSelector: 手动洗牌时发生错误', error);
            }
          }
        };
        return RandomSelector;
      }(Selector);
      /**
       * 序列组合器
       *
       * @description
       * 类似于逻辑"与"操作，按顺序执行子节点直到所有节点成功：
       * - 任何子节点失败时返回失败
       * - 所有子节点成功时返回成功
       * - 子节点运行中时返回运行中
       *
       * @template T 上下文类型
       */
      var Sequence = /*#__PURE__*/function (_Composite4) {
        _inheritsLoose(Sequence, _Composite4);
        function Sequence(abortType) {
          var _this18;
          if (abortType === void 0) {
            abortType = AbortTypes.None;
          }
          _this18 = _Composite4.call(this) || this;
          /** 缓存的子节点数量，避免重复访问length属性*/
          _this18._childCount = 0;
          _this18.abortType = abortType;
          return _this18;
        }
        var _proto28 = Sequence.prototype;
        _proto28.onStart = function onStart() {
          _Composite4.prototype.onStart.call(this);
          this._childCount = this._children.length;
          // 确保每次开始时都从第一个子节点开始
          this._currentChildIndex = 0;
        };
        _proto28.update = function update(context) {
          // 检查是否有子节点
          if (this._childCount === 0) {
            return TaskStatus.Success;
          }
          // 处理条件性中止
          if (this._currentChildIndex !== 0) {
            this.handleConditionalAborts(context);
          }
          // 确保索引有效
          if (this._currentChildIndex >= this._childCount) {
            this._currentChildIndex = 0;
            return TaskStatus.Success;
          }
          var current = this._children[this._currentChildIndex];
          var status = current.tick(context);
          // 如果子节点失败或仍在运行，直接返回
          if (status !== TaskStatus.Success) {
            return status;
          }
          this._currentChildIndex++;
          // 如果已经是最后一个子节点，整个序列成功
          if (this._currentChildIndex >= this._childCount) {
            this._currentChildIndex = 0;
            return TaskStatus.Success;
          }
          return TaskStatus.Running;
        }
        /**
         * 重写invalidate方法，确保在节点无效化时重置索引
         */;
        _proto28.invalidate = function invalidate() {
          _Composite4.prototype.invalidate.call(this);
          this._currentChildIndex = 0;
        }
        /**
         * 添加子节点时更新缓存
         */;
        _proto28.addChild = function addChild(child) {
          _Composite4.prototype.addChild.call(this, child);
          this._childCount = this._children.length;
        }
        /**
         * 处理条件性中止
         */;
        _proto28.handleConditionalAborts = function handleConditionalAborts(context) {
          // 检查低优先级任务的状态变化
          if (this._hasLowerPriorityConditionalAbort) {
            this.updateLowerPriorityAbortConditional(context, TaskStatus.Success);
          }
          // 检查自中止条件
          if (AbortTypesExt.has(this.abortType, AbortTypes.Self)) {
            this.updateSelfAbortConditional(context, TaskStatus.Success);
          }
        };
        return Sequence;
      }(Composite);
      /**
       * 随机序列节点
       *
       * @description
       * 与Sequence相同的执行逻辑，但在开始时会随机打乱子节点的执行顺序。
       * 适用于需要随机化行为执行顺序的场景，增加AI行为的不可预测性。
       *
       * @template T 上下文类型
       *
       * @example
       * ```typescript
       * // 创建一个随机执行巡逻点的序列
       * const randomPatrol = new RandomSequence<GameContext>();
       * randomPatrol.addChild(new MoveToPoint(point1));
       * randomPatrol.addChild(new MoveToPoint(point2));
       * randomPatrol.addChild(new MoveToPoint(point3));
       * // 每次执行时，巡逻点的顺序都会被随机打乱
       * ```
       */
      var RandomSequence = /*#__PURE__*/function (_Sequence) {
        _inheritsLoose(RandomSequence, _Sequence);
        /**
         * 创建随机序列节点
         * @param abortType 中止类型，默认为None
         * @param reshuffleOnRestart 是否在每次重新开始时都重新洗牌，默认true
         */
        function RandomSequence(abortType, reshuffleOnRestart) {
          var _this19;
          if (abortType === void 0) {
            abortType = AbortTypes.None;
          }
          if (reshuffleOnRestart === void 0) {
            reshuffleOnRestart = true;
          }
          _this19 = _Sequence.call(this, abortType) || this;
          /** 原始子节点顺序的备份 */
          _this19._originalOrder = null;
          _this19._reshuffleOnRestart = reshuffleOnRestart;
          return _this19;
        }
        /**
         * 节点开始时的处理
         * 随机打乱子节点顺序
         */
        var _proto29 = RandomSequence.prototype;
        _proto29.onStart = function onStart() {
          // 首先调用父类的onStart方法，重置_currentChildIndex
          _Sequence.prototype.onStart.call(this);
          // 备份原始顺序（仅在第一次时）
          if (this._originalOrder === null && this._children.length > 0) {
            this._originalOrder = [].concat(this._children);
          }
          // 只有在有多个子节点时才进行洗牌
          if (this._children.length > 1) {
            try {
              ArrayExt.shuffle(this._children);
            } catch (error) {
              console.error('RandomSequence: 洗牌子节点时发生错误:', error);
              // 如果洗牌失败，恢复原始顺序
              if (this._originalOrder) {
                this._children = [].concat(this._originalOrder);
              }
            }
          }
        }
        /**
         * 重置节点状态
         * 如果启用了reshuffleOnRestart，会在下次开始时重新洗牌
         */;
        _proto29.invalidate = function invalidate() {
          _Sequence.prototype.invalidate.call(this);
          // 如果不需要每次重启都洗牌，恢复原始顺序
          if (!this._reshuffleOnRestart && this._originalOrder) {
            this._children = [].concat(this._originalOrder);
          }
        }
        /**
         * 设置是否在重新开始时重新洗牌
         * @param enabled 是否启用
         */;
        _proto29.setReshuffleOnRestart = function setReshuffleOnRestart(enabled) {
          this._reshuffleOnRestart = enabled;
        }
        /**
         * 获取是否在重新开始时重新洗牌
         * @returns 当前设置
         */;
        _proto29.getReshuffleOnRestart = function getReshuffleOnRestart() {
          return this._reshuffleOnRestart;
        }
        /**
         * 恢复原始子节点顺序
         * @description 将子节点顺序恢复到添加时的原始顺序
         */;
        _proto29.restoreOriginalOrder = function restoreOriginalOrder() {
          if (this._originalOrder) {
            this._children = [].concat(this._originalOrder);
          }
        }
        /**
         * 手动重新洗牌子节点
         * @description 立即重新洗牌子节点顺序，不等待下次开始
         */;
        _proto29.reshuffleNow = function reshuffleNow() {
          if (this._children.length > 1) {
            try {
              ArrayExt.shuffle(this._children);
            } catch (error) {
              console.error('RandomSequence: 手动洗牌时发生错误', error);
            }
          }
        };
        return RandomSequence;
      }(Sequence);
      /**
       * 设置黑板变量值
       *
       * @description 将指定值或另一个黑板变量的值设置到目标变量
       *
       * @example
       * ```typescript
       * // 设置固定值
       * const setHealth = new SetBlackboardValue<GameContext>('playerHealth', 100);
       *
       * // 从另一个变量复制值
       * const copyValue = new SetBlackboardValue<GameContext>('targetHealth', null, 'playerHealth');
       * ```
       */
      var SetBlackboardValue = /*#__PURE__*/function (_Behavior7) {
        _inheritsLoose(SetBlackboardValue, _Behavior7);
        function SetBlackboardValue(variableName, value, sourceVariable, force) {
          var _this20;
          if (value === void 0) {
            value = null;
          }
          if (force === void 0) {
            force = false;
          }
          _this20 = _Behavior7.call(this) || this;
          _this20.variableName = variableName;
          _this20.value = value;
          _this20.sourceVariable = sourceVariable;
          _this20.force = force;
          return _this20;
        }
        var _proto30 = SetBlackboardValue.prototype;
        _proto30.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('SetBlackboardValue: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          var valueToSet;
          if (this.sourceVariable) {
            if (!blackboard.hasVariable(this.sourceVariable)) {
              console.warn("SetBlackboardValue: \u6E90\u53D8\u91CF \"" + this.sourceVariable + "\" \u4E0D\u5B58\u5728");
              return TaskStatus.Failure;
            }
            valueToSet = blackboard.getValue(this.sourceVariable);
          } else {
            valueToSet = this.value;
            // 处理黑板变量引用，如 "{{variableName}}"
            if (typeof valueToSet === 'string') {
              // 检查是否是纯黑板变量引用（如 "{{variableName}}"）
              var pureVariableMatch = valueToSet.match(/^{{\s*(\w+)\s*}}$/);
              if (pureVariableMatch) {
                // 纯变量引用，返回原始类型的值
                var varName = pureVariableMatch[1];
                if (blackboard.hasVariable(varName)) {
                  valueToSet = blackboard.getValue(varName);
                } else {
                  console.warn("SetBlackboardValue: \u5F15\u7528\u7684\u53D8\u91CF \"" + varName + "\" \u4E0D\u5B58\u5728");
                  return TaskStatus.Failure;
                }
              } else {
                // 包含变量的字符串模板，进行字符串替换
                valueToSet = valueToSet.replace(/\{\{(\w+)\}\}/g, function (match, varName) {
                  if (blackboard.hasVariable(varName)) {
                    var value = blackboard.getValue(varName);
                    return value !== undefined ? String(value) : match;
                  }
                  return match;
                });
              }
            }
          }
          // 获取目标变量的类型定义，确保类型匹配
          var targetVariableDef = blackboard.getVariableDefinition(this.variableName);
          if (targetVariableDef && valueToSet !== null && valueToSet !== undefined) {
            // 根据目标变量类型转换值
            valueToSet = this.convertValueToTargetType(valueToSet, targetVariableDef.type);
          }
          var success = blackboard.setValue(this.variableName, valueToSet, this.force);
          return success ? TaskStatus.Success : TaskStatus.Failure;
        }
        /**
         * 将值转换为目标类型
         */;
        _proto30.convertValueToTargetType = function convertValueToTargetType(value, targetType) {
          if (value === null || value === undefined) {
            return value;
          }
          // 处理枚举值和字符串值
          var typeStr = targetType === BlackboardValueType.Number || targetType === 'number' ? 'number' : targetType === BlackboardValueType.String || targetType === 'string' ? 'string' : targetType === BlackboardValueType.Boolean || targetType === 'boolean' ? 'boolean' : 'unknown';
          // 如果已经是正确类型，直接返回
          switch (typeStr) {
            case 'string':
              return typeof value === 'string' ? value : String(value);
            case 'number':
              if (typeof value === 'number') return value;
              if (typeof value === 'string') {
                var num = parseFloat(value);
                return isNaN(num) ? 0 : num;
              }
              return Number(value) || 0;
            case 'boolean':
              if (typeof value === 'boolean') return value;
              if (typeof value === 'string') {
                return value.toLowerCase() === 'true';
              }
              return Boolean(value);
            default:
              return value;
          }
        };
        return SetBlackboardValue;
      }(Behavior);
      /**
       * 增加数值型黑板变量
       *
       * @description 将数值型变量增加指定的数值，支持从另一个变量获取增量
       */
      var AddToBlackboardValue = /*#__PURE__*/function (_Behavior8) {
        _inheritsLoose(AddToBlackboardValue, _Behavior8);
        function AddToBlackboardValue(variableName, increment, incrementVariable) {
          var _this21;
          _this21 = _Behavior8.call(this) || this;
          _this21.variableName = variableName;
          _this21.increment = increment;
          _this21.incrementVariable = incrementVariable;
          return _this21;
        }
        var _proto31 = AddToBlackboardValue.prototype;
        _proto31.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('AddToBlackboardValue: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          if (!blackboard.hasVariable(this.variableName)) {
            console.warn("AddToBlackboardValue: \u53D8\u91CF \"" + this.variableName + "\" \u4E0D\u5B58\u5728");
            return TaskStatus.Failure;
          }
          var currentValue = blackboard.getValue(this.variableName);
          if (typeof currentValue !== 'number') {
            console.warn("AddToBlackboardValue: \u53D8\u91CF \"" + this.variableName + "\" \u4E0D\u662F\u6570\u503C\u7C7B\u578B");
            return TaskStatus.Failure;
          }
          var incrementValue;
          if (this.incrementVariable) {
            if (!blackboard.hasVariable(this.incrementVariable)) {
              console.warn("AddToBlackboardValue: \u589E\u91CF\u53D8\u91CF \"" + this.incrementVariable + "\" \u4E0D\u5B58\u5728");
              return TaskStatus.Failure;
            }
            incrementValue = blackboard.getValue(this.incrementVariable);
            if (typeof incrementValue !== 'number') {
              console.warn("AddToBlackboardValue: \u589E\u91CF\u53D8\u91CF \"" + this.incrementVariable + "\" \u4E0D\u662F\u6570\u503C\u7C7B\u578B");
              return TaskStatus.Failure;
            }
          } else {
            incrementValue = this.increment;
          }
          var newValue = currentValue + incrementValue;
          var success = blackboard.setValue(this.variableName, newValue);
          return success ? TaskStatus.Success : TaskStatus.Failure;
        };
        return AddToBlackboardValue;
      }(Behavior);
      /**
       * 切换布尔型黑板变量
       *
       * @description 将布尔型变量的值取反
       */
      var ToggleBlackboardBool = /*#__PURE__*/function (_Behavior9) {
        _inheritsLoose(ToggleBlackboardBool, _Behavior9);
        function ToggleBlackboardBool(variableName) {
          var _this22;
          _this22 = _Behavior9.call(this) || this;
          _this22.variableName = variableName;
          return _this22;
        }
        var _proto32 = ToggleBlackboardBool.prototype;
        _proto32.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('ToggleBlackboardBool: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          if (!blackboard.hasVariable(this.variableName)) {
            console.warn("ToggleBlackboardBool: \u53D8\u91CF \"" + this.variableName + "\" \u4E0D\u5B58\u5728");
            return TaskStatus.Failure;
          }
          var currentValue = blackboard.getValue(this.variableName);
          if (typeof currentValue !== 'boolean') {
            console.warn("ToggleBlackboardBool: \u53D8\u91CF \"" + this.variableName + "\" \u4E0D\u662F\u5E03\u5C14\u7C7B\u578B");
            return TaskStatus.Failure;
          }
          var success = blackboard.setValue(this.variableName, !currentValue);
          return success ? TaskStatus.Success : TaskStatus.Failure;
        };
        return ToggleBlackboardBool;
      }(Behavior);
      /**
       * 重置黑板变量到默认值
       *
       * @description 将指定变量重置为其定义时的默认值
       */
      var ResetBlackboardVariable = /*#__PURE__*/function (_Behavior10) {
        _inheritsLoose(ResetBlackboardVariable, _Behavior10);
        function ResetBlackboardVariable(variableName) {
          var _this23;
          _this23 = _Behavior10.call(this) || this;
          _this23.variableName = variableName;
          return _this23;
        }
        var _proto33 = ResetBlackboardVariable.prototype;
        _proto33.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('ResetBlackboardVariable: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          var success = blackboard.resetVariable(this.variableName);
          return success ? TaskStatus.Success : TaskStatus.Failure;
        };
        return ResetBlackboardVariable;
      }(Behavior);
      /**
       * 等待黑板变量满足条件
       *
       * @description 等待指定的黑板变量满足某个条件，常用于同步操作
       */
      var WaitForBlackboardCondition = /*#__PURE__*/function (_Behavior11) {
        _inheritsLoose(WaitForBlackboardCondition, _Behavior11);
        function WaitForBlackboardCondition(variableName, expectedValue, compareFn) {
          var _this24;
          _this24 = _Behavior11.call(this) || this;
          _this24.variableName = variableName;
          _this24.expectedValue = expectedValue;
          _this24.compareFn = compareFn;
          return _this24;
        }
        var _proto34 = WaitForBlackboardCondition.prototype;
        _proto34.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('WaitForBlackboardCondition: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          if (!blackboard.hasVariable(this.variableName)) {
            console.warn("WaitForBlackboardCondition: \u53D8\u91CF \"" + this.variableName + "\" \u4E0D\u5B58\u5728");
            return TaskStatus.Failure;
          }
          var currentValue = blackboard.getValue(this.variableName);
          var conditionMet;
          if (this.compareFn) {
            conditionMet = this.compareFn(currentValue, this.expectedValue);
          } else {
            conditionMet = currentValue === this.expectedValue;
          }
          return conditionMet ? TaskStatus.Success : TaskStatus.Running;
        };
        return WaitForBlackboardCondition;
      }(Behavior);
      /**
       * 记录黑板变量到控制台
       *
       * @description 将黑板变量的当前值记录到控制台，用于调试
       */
      var LogBlackboardValue = /*#__PURE__*/function (_Behavior12) {
        _inheritsLoose(LogBlackboardValue, _Behavior12);
        function LogBlackboardValue(variableName, prefix) {
          var _this25;
          if (prefix === void 0) {
            prefix = '[Blackboard]';
          }
          _this25 = _Behavior12.call(this) || this;
          _this25.variableName = variableName;
          _this25.prefix = prefix;
          return _this25;
        }
        var _proto35 = LogBlackboardValue.prototype;
        _proto35.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('LogBlackboardValue: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          if (!blackboard.hasVariable(this.variableName)) {
            console.warn("LogBlackboardValue: \u53D8\u91CF \"" + this.variableName + "\" \u4E0D\u5B58\u5728");
            return TaskStatus.Failure;
          }
          var value = blackboard.getValue(this.variableName);
          var variableDefinition = blackboard.getVariableDefinition(this.variableName);
          console.log(this.prefix + " " + this.variableName + " (" + (variableDefinition == null ? void 0 : variableDefinition.type) + "):", value);
          return TaskStatus.Success;
        };
        return LogBlackboardValue;
      }(Behavior);
      /**
       * 数学运算黑板变量
       *
       * @description 对数值型黑板变量执行数学运算
       */
      var MathOperation;
      (function (MathOperation) {
        MathOperation["Add"] = "add";
        MathOperation["Subtract"] = "subtract";
        MathOperation["Multiply"] = "multiply";
        MathOperation["Divide"] = "divide";
        MathOperation["Modulo"] = "modulo";
        MathOperation["Power"] = "power";
        MathOperation["Min"] = "min";
        MathOperation["Max"] = "max";
      })(MathOperation || (MathOperation = {}));
      var MathBlackboardOperation = /*#__PURE__*/function (_Behavior13) {
        _inheritsLoose(MathBlackboardOperation, _Behavior13);
        function MathBlackboardOperation(targetVariable, operand1Variable, operand2, operation) {
          var _this26;
          _this26 = _Behavior13.call(this) || this;
          _this26.targetVariable = targetVariable;
          _this26.operand1Variable = operand1Variable;
          _this26.operand2 = operand2;
          _this26.operation = operation;
          return _this26;
        }
        var _proto36 = MathBlackboardOperation.prototype;
        _proto36.update = function update(context) {
          var blackboard = context.blackboard;
          if (!blackboard || !(blackboard instanceof Blackboard)) {
            console.warn('MathBlackboardOperation: 上下文中未找到Blackboard实例');
            return TaskStatus.Failure;
          }
          // 获取第一个操作数
          if (!blackboard.hasVariable(this.operand1Variable)) {
            console.warn("MathBlackboardOperation: \u64CD\u4F5C\u6570\u53D8\u91CF \"" + this.operand1Variable + "\" \u4E0D\u5B58\u5728");
            return TaskStatus.Failure;
          }
          var operand1 = blackboard.getValue(this.operand1Variable);
          if (typeof operand1 !== 'number') {
            console.warn("MathBlackboardOperation: \u64CD\u4F5C\u6570\u53D8\u91CF \"" + this.operand1Variable + "\" \u4E0D\u662F\u6570\u503C\u7C7B\u578B");
            return TaskStatus.Failure;
          }
          // 获取第二个操作数
          var operand2;
          if (typeof this.operand2 === 'string') {
            if (!blackboard.hasVariable(this.operand2)) {
              console.warn("MathBlackboardOperation: \u64CD\u4F5C\u6570\u53D8\u91CF \"" + this.operand2 + "\" \u4E0D\u5B58\u5728");
              return TaskStatus.Failure;
            }
            operand2 = blackboard.getValue(this.operand2);
            if (typeof operand2 !== 'number') {
              console.warn("MathBlackboardOperation: \u64CD\u4F5C\u6570\u53D8\u91CF \"" + this.operand2 + "\" \u4E0D\u662F\u6570\u503C\u7C7B\u578B");
              return TaskStatus.Failure;
            }
          } else {
            operand2 = this.operand2;
          }
          // 执行数学运算
          var result;
          try {
            switch (this.operation) {
              case MathOperation.Add:
                result = operand1 + operand2;
                break;
              case MathOperation.Subtract:
                result = operand1 - operand2;
                break;
              case MathOperation.Multiply:
                result = operand1 * operand2;
                break;
              case MathOperation.Divide:
                if (operand2 === 0) {
                  console.warn('MathBlackboardOperation: 除数不能为零');
                  return TaskStatus.Failure;
                }
                result = operand1 / operand2;
                break;
              case MathOperation.Modulo:
                if (operand2 === 0) {
                  console.warn('MathBlackboardOperation: 模运算的除数不能为零');
                  return TaskStatus.Failure;
                }
                result = operand1 % operand2;
                break;
              case MathOperation.Power:
                result = Math.pow(operand1, operand2);
                break;
              case MathOperation.Min:
                result = Math.min(operand1, operand2);
                break;
              case MathOperation.Max:
                result = Math.max(operand1, operand2);
                break;
              default:
                console.warn("MathBlackboardOperation: \u4E0D\u652F\u6301\u7684\u6570\u5B66\u64CD\u4F5C \"" + this.operation + "\"");
                return TaskStatus.Failure;
            }
          } catch (error) {
            console.error('MathBlackboardOperation: 数学运算执行失败:', error);
            return TaskStatus.Failure;
          }
          // 设置结果
          var success = blackboard.setValue(this.targetVariable, result);
          return success ? TaskStatus.Success : TaskStatus.Failure;
        };
        return MathBlackboardOperation;
      }(Behavior);
      /**
       * 数值比较条件
       *
       * @description 对上下文中的数值属性进行比较
       */
      var NumericComparison = /*#__PURE__*/function () {
        function NumericComparison(propertyPath, compareOperator, compareValue) {
          this.discriminator = 'IConditional';
          this.propertyPath = propertyPath;
          this.compareOperator = compareOperator;
          this.compareValue = compareValue;
        }
        var _proto37 = NumericComparison.prototype;
        _proto37.update = function update(context) {
          try {
            var value = this._getNestedProperty(context, this.propertyPath);
            if (typeof value !== 'number') {
              console.warn("NumericComparison: \u5C5E\u6027 \"" + this.propertyPath + "\" \u4E0D\u662F\u6570\u503C\u7C7B\u578B\uFF0C\u503C\u4E3A: " + value);
              return TaskStatus.Failure;
            }
            var result = this._performComparison(value, this.compareValue, this.compareOperator);
            return result ? TaskStatus.Success : TaskStatus.Failure;
          } catch (error) {
            console.error("NumericComparison: \u8BBF\u95EE\u5C5E\u6027 \"" + this.propertyPath + "\" \u65F6\u53D1\u751F\u9519\u8BEF:", error);
            return TaskStatus.Failure;
          }
        }
        /**
         * 获取嵌套属性值
         */;
        _proto37._getNestedProperty = function _getNestedProperty(obj, path) {
          return path.split('.').reduce(function (current, key) {
            return current && current[key] !== undefined ? current[key] : undefined;
          }, obj);
        }
        /**
         * 执行数值比较
         */;
        _proto37._performComparison = function _performComparison(left, right, operator) {
          switch (operator) {
            case 'greater':
              return left > right;
            case 'less':
              return left < right;
            case 'equal':
              return left === right;
            case 'greaterEqual':
              return left >= right;
            case 'lessEqual':
              return left <= right;
            case 'notEqual':
              return left !== right;
            default:
              console.warn("NumericComparison: \u672A\u77E5\u7684\u6BD4\u8F83\u64CD\u4F5C\u7B26: " + operator);
              return false;
          }
        };
        return NumericComparison;
      }();
      /**
       * 属性存在检查条件
       *
       * @description 检查上下文对象中是否存在指定的属性
       */
      var PropertyExists = /*#__PURE__*/function () {
        function PropertyExists(propertyPath) {
          this.discriminator = 'IConditional';
          this.propertyPath = propertyPath;
        }
        var _proto38 = PropertyExists.prototype;
        _proto38.update = function update(context) {
          try {
            var value = this._getNestedProperty(context, this.propertyPath);
            var exists = value !== undefined && value !== null;
            return exists ? TaskStatus.Success : TaskStatus.Failure;
          } catch (error) {
            console.error("PropertyExists: \u8BBF\u95EE\u5C5E\u6027 \"" + this.propertyPath + "\" \u65F6\u53D1\u751F\u9519\u8BEF:", error);
            return TaskStatus.Failure;
          }
        }
        /**
         * 获取嵌套属性值
         */;
        _proto38._getNestedProperty = function _getNestedProperty(obj, path) {
          return path.split('.').reduce(function (current, key) {
            return current && current[key] !== undefined ? current[key] : undefined;
          }, obj);
        };
        return PropertyExists;
      }();
      /**
       * 冷却装饰器
       *
       * @description 在指定时间内阻止子节点重复执行，实现技能冷却等机制
       */
      var CooldownDecorator = /*#__PURE__*/function (_Decorator8) {
        _inheritsLoose(CooldownDecorator, _Decorator8);
        function CooldownDecorator(cooldownTime) {
          var _this27;
          _this27 = _Decorator8.call(this) || this;
          /** 上次执行时间 */
          _this27.lastExecutionTime = 0;
          _this27.cooldownTime = cooldownTime;
          return _this27;
        }
        var _proto39 = CooldownDecorator.prototype;
        _proto39.onStart = function onStart() {
          if (this.child && this.child.onStart) {
            this.child.onStart();
          }
        };
        _proto39.update = function update(context) {
          var currentTime = performance.now() / 1000;
          // 检查是否还在冷却中
          if (currentTime - this.lastExecutionTime < this.cooldownTime) {
            return TaskStatus.Failure; // 还在冷却中
          }
          // 执行子节点
          var childResult = this.child ? this.child.update(context) : TaskStatus.Success;
          // 如果子节点执行完成（成功或失败），更新最后执行时间
          if (childResult === TaskStatus.Success || childResult === TaskStatus.Failure) {
            this.lastExecutionTime = currentTime;
          }
          return childResult;
        };
        _proto39.onEnd = function onEnd() {
          if (this.child && this.child.onEnd) {
            this.child.onEnd();
          }
        }
        /**
         * 重置冷却时间
         */;
        _proto39.resetCooldown = function resetCooldown() {
          this.lastExecutionTime = 0;
        }
        /**
         * 获取剩余冷却时间
         */;
        _proto39.getRemainingCooldownTime = function getRemainingCooldownTime() {
          var currentTime = performance.now() / 1000;
          var remaining = this.cooldownTime - (currentTime - this.lastExecutionTime);
          return Math.max(0, remaining);
        }
        /**
         * 检查是否在冷却中
         */;
        _proto39.isOnCooldown = function isOnCooldown() {
          return this.getRemainingCooldownTime() > 0;
        };
        return CooldownDecorator;
      }(Decorator);
      /**
       * 超时装饰器
       *
       * @description 如果子节点执行时间超过指定限制，则强制返回失败状态
       */
      var TimeoutDecorator = /*#__PURE__*/function (_Decorator9) {
        _inheritsLoose(TimeoutDecorator, _Decorator9);
        function TimeoutDecorator(timeoutDuration) {
          var _this28;
          _this28 = _Decorator9.call(this) || this;
          /** 开始执行时间 */
          _this28.startTime = 0;
          /** 是否已开始执行 */
          _this28.hasStarted = false;
          _this28.timeoutDuration = timeoutDuration;
          return _this28;
        }
        var _proto40 = TimeoutDecorator.prototype;
        _proto40.onStart = function onStart() {
          this.startTime = performance.now() / 1000;
          this.hasStarted = true;
          if (this.child && this.child.onStart) {
            this.child.onStart();
          }
        };
        _proto40.update = function update(context) {
          if (!this.hasStarted) {
            return TaskStatus.Failure;
          }
          var currentTime = performance.now() / 1000;
          var elapsedTime = currentTime - this.startTime;
          // 检查是否超时
          if (elapsedTime >= this.timeoutDuration) {
            console.warn("TimeoutDecorator: \u5B50\u8282\u70B9\u6267\u884C\u8D85\u65F6 (" + elapsedTime.toFixed(2) + "s >= " + this.timeoutDuration + "s)");
            return TaskStatus.Failure; // 超时失败
          }
          // 执行子节点
          var childResult = this.child ? this.child.update(context) : TaskStatus.Success;
          // 如果子节点完成，重置状态
          if (childResult !== TaskStatus.Running) {
            this.hasStarted = false;
          }
          return childResult;
        };
        _proto40.onEnd = function onEnd() {
          this.hasStarted = false;
          if (this.child && this.child.onEnd) {
            this.child.onEnd();
          }
        }
        /**
         * 获取剩余时间
         */;
        _proto40.getRemainingTime = function getRemainingTime() {
          if (!this.hasStarted) {
            return this.timeoutDuration;
          }
          var currentTime = performance.now() / 1000;
          var elapsedTime = currentTime - this.startTime;
          return Math.max(0, this.timeoutDuration - elapsedTime);
        }
        /**
         * 获取已执行时间
         */;
        _proto40.getElapsedTime = function getElapsedTime() {
          if (!this.hasStarted) {
            return 0;
          }
          var currentTime = performance.now() / 1000;
          return currentTime - this.startTime;
        }
        /**
         * 检查是否已超时
         */;
        _proto40.isTimedOut = function isTimedOut() {
          return this.getRemainingTime() <= 0;
        };
        return TimeoutDecorator;
      }(Decorator);
      /**
       * 概率装饰器
       *
       * @description 以指定概率执行子节点，用于实现随机性行为
       */
      var ChanceDecorator = /*#__PURE__*/function (_Decorator10) {
        _inheritsLoose(ChanceDecorator, _Decorator10);
        function ChanceDecorator(successChance) {
          var _this29;
          _this29 = _Decorator10.call(this) || this;
          /** 本次执行是否通过概率检查 */
          _this29.shouldExecute = false;
          _this29.successChance = Math.max(0, Math.min(1, successChance)); // 确保在0-1范围内
          return _this29;
        }
        var _proto41 = ChanceDecorator.prototype;
        _proto41.onStart = function onStart() {
          // 在开始时进行一次概率检查，并保存结果
          var random = Math.random();
          this.shouldExecute = random <= this.successChance;
          // 只有概率检查通过时才调用子节点的 onStart
          if (this.shouldExecute && this.child && this.child.onStart) {
            this.child.onStart();
          }
        };
        _proto41.update = function update(context) {
          // 使用 onStart 中保存的概率检查结果
          if (!this.shouldExecute) {
            // 概率检查失败，不执行子节点
            return TaskStatus.Failure;
          }
          // 概率检查成功，执行子节点
          return this.child ? this.child.update(context) : TaskStatus.Success;
        };
        _proto41.onEnd = function onEnd() {
          if (this.child && this.child.onEnd) {
            this.child.onEnd();
          }
        }
        /**
         * 设置成功概率
         */;
        _proto41.setSuccessChance = function setSuccessChance(chance) {
          this.successChance = Math.max(0, Math.min(1, chance));
        }
        /**
         * 获取成功概率
         */;
        _proto41.getSuccessChance = function getSuccessChance() {
          return this.successChance;
        }
        /**
         * 获取成功概率百分比
         */;
        _proto41.getSuccessChancePercentage = function getSuccessChancePercentage() {
          return this.successChance * 100;
        };
        return ChanceDecorator;
      }(Decorator);
      /**
       * 行为树构建器类
       * @description 提供构建行为树的流畅API和配置加载功能
       * @template T 执行上下文类型
       *
       * @example
       * ```typescript
       * // 使用流畅API构建
       * const tree = BehaviorTreeBuilder.begin(context)
       *   .selector()
       *     .sequence()
       *       .logAction("开始执行")
       *       .waitAction(1.0)
       *     .endComposite()
       *     .logAction("备选方案")
       *   .endComposite()
       *   .build();
       *
       * // 从JSON配置构建
       * const result = BehaviorTreeBuilder.fromBehaviorTreeConfig(jsonConfig, context);
       * ```
       */
      var BehaviorTreeBuilder = exports('BehaviorTreeBuilder', /*#__PURE__*/function () {
        /**
         * 构造函数
         * @param context 执行上下文
         */
        function BehaviorTreeBuilder(context) {
          /** 父节点堆栈，用于流畅API构建 */
          this._parentNodeStack = new Array();
          this._context = context;
        }
        /**
         * 开始构建行为树
         * @param context 执行上下文
         * @returns 新的构建器实例
         */
        BehaviorTreeBuilder.begin = function begin(context) {
          return new BehaviorTreeBuilder(context);
        }
        /**
         * 设置子节点到父节点
         * @param child 子节点
         * @returns 构建器实例
         */;
        var _proto42 = BehaviorTreeBuilder.prototype;
        _proto42.setChildOnParent = function setChildOnParent(child) {
          var parent = this._parentNodeStack[this._parentNodeStack.length - 1];
          if (parent instanceof Composite) {
            parent.addChild(child);
          } else if (parent instanceof Decorator) {
            // 装饰器只有一个子节点，所以自动结束
            parent.child = child;
            this.endDecorator();
          }
          return this;
        }
        /**
         * 将节点推入父节点堆栈
         * @param composite 复合节点或装饰器节点
         * @returns 构建器实例
         */;
        _proto42.pushParentNode = function pushParentNode(composite) {
          if (this._parentNodeStack.length > 0) {
            this.setChildOnParent(composite);
          }
          this._parentNodeStack.push(composite);
          return this;
        }
        /**
         * 结束装饰器节点
         * @returns 构建器实例
         */;
        _proto42.endDecorator = function endDecorator() {
          this._currentNode = this._parentNodeStack.pop();
          return this;
        }
        /**
         * 添加动作节点
         * @param func 动作执行函数
         * @returns 构建器实例
         */;
        _proto42.action = function action(func) {
          if (this._parentNodeStack.length === 0) {
            throw new Error("无法创建无嵌套的动作节点，它必须是一个叶节点");
          }
          return this.setChildOnParent(new ExecuteAction(func));
        }
        /**
         * 添加返回布尔值的动作节点
         * @param func 返回布尔值的函数
         * @returns 构建器实例
         */;
        _proto42.actionR = function actionR(func) {
          return this.action(function (t) {
            return func(t) ? TaskStatus.Success : TaskStatus.Failure;
          });
        }
        /**
         * 添加动作节点 (action的别名方法)
         * @param func 动作执行函数
         * @returns 构建器实例
         */;
        _proto42.executeAction = function executeAction(func) {
          return this.action(func);
        }
        /**
         * 添加条件节点
         * @param func 条件检查函数
         * @returns 构建器实例
         */;
        _proto42.conditional = function conditional(func) {
          if (this._parentNodeStack.length === 0) {
            throw new Error("无法创建无嵌套的条件节点，它必须是一个叶节点");
          }
          return this.setChildOnParent(new ExecuteActionConditional(func));
        }
        /**
         * 添加返回布尔值的条件节点
         * @param func 返回布尔值的条件函数
         * @returns 构建器实例
         */;
        _proto42.conditionalR = function conditionalR(func) {
          return this.conditional(function (t) {
            return func(t) ? TaskStatus.Success : TaskStatus.Failure;
          });
        }
        /**
         * 添加日志动作节点
         * @param text 日志文本
         * @returns 构建器实例
         */;
        _proto42.logAction = function logAction(text) {
          if (this._parentNodeStack.length === 0) {
            throw new Error("无法创建无嵌套的动作节点，它必须是一个叶节点");
          }
          return this.setChildOnParent(new LogAction(text));
        }
        /**
         * 添加等待动作节点
         * @param waitTime 等待时间（秒）
         * @returns 构建器实例
         */;
        _proto42.waitAction = function waitAction(waitTime) {
          if (this._parentNodeStack.length === 0) {
            throw new Error("无法创建无嵌套的动作节点，它必须是一个叶节点");
          }
          return this.setChildOnParent(new WaitAction(waitTime));
        }
        /**
         * 添加子行为树节点
         * @param subTree 子行为树实例
         * @returns 构建器实例
         */;
        _proto42.subTree = function subTree(_subTree) {
          if (this._parentNodeStack.length === 0) {
            throw new Error("无法创建无嵌套的动作节点，它必须是一个叶节点");
          }
          return this.setChildOnParent(new BehaviorTreeReference(_subTree));
        }
        /**
         * 添加设置黑板值的动作节点
         * @param variableName 变量名
         * @param value 要设置的值
         * @param sourceVariable 源变量名(可选)
         * @param force 是否强制设置
         * @returns 构建器实例
         */;
        _proto42.setBlackboardValue = function setBlackboardValue(variableName, value, sourceVariable, force) {
          if (force === void 0) {
            force = false;
          }
          if (this._parentNodeStack.length === 0) {
            throw new Error("无法创建无嵌套的动作节点，它必须是一个叶节点");
          }
          return this.setChildOnParent(new SetBlackboardValue(variableName, value, sourceVariable, force));
        };
        _proto42.conditionalDecorator = function conditionalDecorator(func, shouldReevaluate) {
          if (shouldReevaluate === void 0) {
            shouldReevaluate = true;
          }
          var wrappedFunc = function wrappedFunc(t) {
            var result = func(t);
            if (typeof result === 'boolean') {
              return result ? TaskStatus.Success : TaskStatus.Failure;
            }
            return result;
          };
          var conditional = new ExecuteActionConditional(wrappedFunc);
          return this.pushParentNode(new ConditionalDecorator(conditional, shouldReevaluate));
        }
        /**
         * 添加返回布尔值的条件装饰器
         * @param func 返回布尔值的条件函数
         * @param shouldReevaluate 是否重新评估
         * @returns 构建器实例
         */;
        _proto42.conditionalDecoratorR = function conditionalDecoratorR(func, shouldReevaluate) {
          if (shouldReevaluate === void 0) {
            shouldReevaluate = true;
          }
          return this.conditionalDecorator(function (t) {
            return func(t) ? TaskStatus.Success : TaskStatus.Failure;
          }, shouldReevaluate);
        }
        /**
         * 添加总是失败装饰器
         * @returns 构建器实例
         */;
        _proto42.alwaysFail = function alwaysFail() {
          return this.pushParentNode(new AlwaysFail());
        }
        /**
         * 添加总是成功装饰器
         * @returns 构建器实例
         */;
        _proto42.alwaysSucceed = function alwaysSucceed() {
          return this.pushParentNode(new AlwaysSucceed());
        }
        /**
         * 添加反转装饰器
         * @returns 构建器实例
         */;
        _proto42.inverter = function inverter() {
          return this.pushParentNode(new Inverter());
        }
        /**
         * 添加重复装饰器
         * @param count 重复次数
         * @returns 构建器实例
         */;
        _proto42.repeater = function repeater(count) {
          return this.pushParentNode(new Repeater(count));
        }
        /**
         * 添加直到失败装饰器
         * @returns 构建器实例
         */;
        _proto42.untilFail = function untilFail() {
          return this.pushParentNode(new UntilFail());
        }
        /**
         * 添加直到成功装饰器
         * @returns 构建器实例
         */;
        _proto42.untilSuccess = function untilSuccess() {
          return this.pushParentNode(new UntilSuccess());
        }
        /**
         * 添加并行节点
         * @returns 构建器实例
         */;
        _proto42.paraller = function paraller() {
          return this.pushParentNode(new Parallel());
        }
        /**
         * 添加并行节点 (paraller的正确拼写别名)
         * @returns 构建器实例
         */;
        _proto42.parallel = function parallel() {
          return this.paraller();
        }
        /**
         * 添加并行选择器节点
         * @returns 构建器实例
         */;
        _proto42.parallelSelector = function parallelSelector() {
          return this.pushParentNode(new ParallelSelector());
        }
        /**
         * 添加选择器节点
         * @param abortType 中止类型
         * @returns 构建器实例
         */;
        _proto42.selector = function selector(abortType) {
          if (abortType === void 0) {
            abortType = AbortTypes.None;
          }
          return this.pushParentNode(new Selector(abortType));
        }
        /**
         * 添加随机选择器节点
         * @returns 构建器实例
         */;
        _proto42.randomSelector = function randomSelector() {
          return this.pushParentNode(new RandomSelector());
        }
        /**
         * 添加序列节点
         * @param abortType 中止类型
         * @returns 构建器实例
         */;
        _proto42.sequence = function sequence(abortType) {
          if (abortType === void 0) {
            abortType = AbortTypes.None;
          }
          return this.pushParentNode(new Sequence(abortType));
        }
        /**
         * 添加随机序列节点
         * @returns 构建器实例
         */;
        _proto42.randomSequence = function randomSequence() {
          return this.pushParentNode(new RandomSequence());
        }
        /**
         * 结束复合节点
         * @returns 构建器实例
         */;
        _proto42.endComposite = function endComposite() {
          var topNode = this._parentNodeStack[this._parentNodeStack.length - 1];
          if (!(topNode instanceof Composite)) {
            throw new Error("尝试结束复合器，但顶部节点是装饰器");
          }
          this._currentNode = this._parentNodeStack.pop();
          return this;
        }
        /**
         * 构建最终的行为树
         * @param updatePeriod 更新周期（秒），默认0.2秒
         * @returns 构建好的行为树实例
         */;
        _proto42.build = function build(updatePeriod) {
          if (updatePeriod === void 0) {
            updatePeriod = 0.2;
          }
          if (!this._currentNode) {
            throw new Error('无法创建零节点的行为树');
          }
          return new BehaviorTree(this._context, this._currentNode, updatePeriod);
        }
        /**
         * 从配置对象创建行为树
         * @param config 行为树配置
         * @param context 执行上下文
         * @returns 构建好的行为树
         */;
        BehaviorTreeBuilder.fromConfig = function fromConfig(config, context) {
          try {
            var _config$metadata$upda, _config$metadata;
            if (!config || !config.tree) {
              throw new Error('配置无效：缺少tree属性');
            }
            var rootNode = BehaviorTreeBuilder.createNodeFromConfig(config.tree);
            var updatePeriod = (_config$metadata$upda = (_config$metadata = config.metadata) == null ? void 0 : _config$metadata.updatePeriod) != null ? _config$metadata$upda : 0.2;
            return new BehaviorTree(context, rootNode, updatePeriod);
          } catch (error) {
            var errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error("\u4ECE\u914D\u7F6E\u521B\u5EFA\u884C\u4E3A\u6811\u5931\u8D25: " + errorMessage);
          }
        }
        /**
         * 从JSON配置创建行为树
         * @description 自动初始化黑板变量和构建节点树，提供一键式行为树创建
         * @param config JSON格式的行为树配置
         * @param context 执行上下文（可选，如果不提供将创建默认上下文）
         * @returns 包含行为树、黑板和增强上下文的结果对象
         *
         * @example
         * ```typescript
         * const config = {
         *   nodes: [...],
         *   blackboard: [...],
         *   metadata: { name: "MyBehaviorTree" }
         * };
         * const result = BehaviorTreeBuilder.fromBehaviorTreeConfig(config, context);
         * const { tree, blackboard, context: enhancedContext } = result;
         * ```
         */;
        BehaviorTreeBuilder.fromBehaviorTreeConfig = function fromBehaviorTreeConfig(config, context) {
          try {
            var _config$metadata$upda2, _config$metadata2;
            // 验证配置
            if (!config || !config.nodes || config.nodes.length === 0) {
              throw new Error('配置无效：缺少nodes属性或nodes为空');
            }
            // 创建黑板并初始化变量
            var blackboard = new Blackboard();
            if (config.blackboard && config.blackboard.length > 0) {
              for (var _iterator9 = _createForOfIteratorHelperLoose(config.blackboard), _step9; !(_step9 = _iterator9()).done;) {
                var _variable$constraints, _variable$constraints2;
                var variable = _step9.value;
                // 映射类型字符串到枚举
                var blackboardType = BehaviorTreeBuilder.mapToBlackboardType(variable.type);
                // 转换值类型以匹配黑板期望的类型
                var convertedValue = BehaviorTreeBuilder.convertBlackboardValue(variable.value, blackboardType);
                blackboard.defineVariable(variable.name, blackboardType, convertedValue, {
                  description: variable.description,
                  group: variable.group || 'Default',
                  readonly: (_variable$constraints = (_variable$constraints2 = variable.constraints) == null ? void 0 : _variable$constraints2.readonly) != null ? _variable$constraints : false
                });
              }
            }
            // 创建或增强执行上下文
            var enhancedContext = context || {};
            enhancedContext.blackboard = blackboard;
            // 构建节点树
            var nodeMap = new Map();
            // 建立节点映射
            for (var _iterator10 = _createForOfIteratorHelperLoose(config.nodes), _step10; !(_step10 = _iterator10()).done;) {
              var node = _step10.value;
              nodeMap.set(node.id, node);
            }
            // 找到根节点（通常是第一个节点或type为'root'的节点）
            var rootNodeConfig = config.nodes.find(function (n) {
              return n.type === 'root';
            }) || config.nodes[0];
            if (!rootNodeConfig) {
              throw new Error('未找到根节点');
            }
            // 递归构建节点树
            var rootNode = BehaviorTreeBuilder.createNodeFromJSONConfig(rootNodeConfig, nodeMap, enhancedContext);
            // 创建行为树
            var updatePeriod = (_config$metadata$upda2 = (_config$metadata2 = config.metadata) == null ? void 0 : _config$metadata2.updatePeriod) != null ? _config$metadata$upda2 : 0.2;
            var tree = new BehaviorTree(enhancedContext, rootNode, updatePeriod, false, blackboard);
            return {
              tree: tree,
              blackboard: blackboard,
              context: enhancedContext
            };
          } catch (error) {
            var errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error("\u4ECE\u914D\u7F6E\u521B\u5EFA\u884C\u4E3A\u6811\u5931\u8D25: " + errorMessage);
          }
        }
        /**
         * 映射字符串类型到BlackboardValueType枚举
         * @param typeString 类型字符串
         * @returns 对应的黑板值类型枚举
         */;
        BehaviorTreeBuilder.mapToBlackboardType = function mapToBlackboardType(typeString) {
          switch (typeString.toLowerCase()) {
            case 'string':
              return BlackboardValueType.String;
            case 'number':
              return BlackboardValueType.Number;
            case 'boolean':
              return BlackboardValueType.Boolean;
            case 'vector2':
              return BlackboardValueType.Vector2;
            case 'vector3':
              return BlackboardValueType.Vector3;
            case 'object':
              return BlackboardValueType.Object;
            case 'array':
              return BlackboardValueType.Array;
            default:
              console.warn("\u672A\u77E5\u7684\u53D8\u91CF\u7C7B\u578B: " + typeString + ", \u9ED8\u8BA4\u4F7F\u7528Object\u7C7B\u578B");
              return BlackboardValueType.Object;
          }
        }
        /**
         * 转换黑板变量值到正确的类型
         * @param value 原始值（通常来自JSON，都是字符串）
         * @param targetType 目标类型
         * @returns 转换后的值
         */;
        BehaviorTreeBuilder.convertBlackboardValue = function convertBlackboardValue(value, targetType) {
          // 为不同类型提供合理的默认值
          if (value === null || value === undefined || value === '') {
            switch (targetType) {
              case BlackboardValueType.String:
                return '';
              case BlackboardValueType.Number:
                return 0;
              case BlackboardValueType.Boolean:
                return false;
              // 布尔类型默认为false
              case BlackboardValueType.Vector2:
                return {
                  x: 0,
                  y: 0
                };
              case BlackboardValueType.Vector3:
                return {
                  x: 0,
                  y: 0,
                  z: 0
                };
              case BlackboardValueType.Object:
                return {};
              case BlackboardValueType.Array:
                return [];
              default:
                return null;
            }
          }
          switch (targetType) {
            case BlackboardValueType.String:
              return String(value);
            case BlackboardValueType.Number:
              if (typeof value === 'string') {
                var num = parseFloat(value);
                if (isNaN(num)) {
                  console.warn("\u65E0\u6CD5\u5C06 \"" + value + "\" \u8F6C\u6362\u4E3A\u6570\u5B57\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C 0");
                  return 0;
                }
                return num;
              }
              return typeof value === 'number' ? value : 0;
            case BlackboardValueType.Boolean:
              if (typeof value === 'string') {
                // 处理空字符串的情况
                if (value === '') return false;
                return value.toLowerCase() === 'true';
              }
              return Boolean(value);
            case BlackboardValueType.Vector2:
              if (typeof value === 'string') {
                try {
                  var parsed = JSON.parse(value);
                  return parsed && typeof parsed === 'object' && 'x' in parsed && 'y' in parsed ? parsed : {
                    x: 0,
                    y: 0
                  };
                } catch (_unused4) {
                  console.warn("\u65E0\u6CD5\u89E3\u6790Vector2\u503C \"" + value + "\"\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C {x:0, y:0}");
                  return {
                    x: 0,
                    y: 0
                  };
                }
              }
              return value && typeof value === 'object' && 'x' in value && 'y' in value ? value : {
                x: 0,
                y: 0
              };
            case BlackboardValueType.Vector3:
              if (typeof value === 'string') {
                try {
                  var _parsed = JSON.parse(value);
                  return _parsed && typeof _parsed === 'object' && 'x' in _parsed && 'y' in _parsed && 'z' in _parsed ? _parsed : {
                    x: 0,
                    y: 0,
                    z: 0
                  };
                } catch (_unused5) {
                  console.warn("\u65E0\u6CD5\u89E3\u6790Vector3\u503C \"" + value + "\"\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C {x:0, y:0, z:0}");
                  return {
                    x: 0,
                    y: 0,
                    z: 0
                  };
                }
              }
              return value && typeof value === 'object' && 'x' in value && 'y' in value && 'z' in value ? value : {
                x: 0,
                y: 0,
                z: 0
              };
            case BlackboardValueType.Object:
              if (typeof value === 'string') {
                try {
                  return JSON.parse(value);
                } catch (_unused6) {
                  console.warn("\u65E0\u6CD5\u89E3\u6790Object\u503C \"" + value + "\"\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C {}");
                  return {};
                }
              }
              return typeof value === 'object' ? value : {};
            case BlackboardValueType.Array:
              if (typeof value === 'string') {
                try {
                  var _parsed2 = JSON.parse(value);
                  return Array.isArray(_parsed2) ? _parsed2 : [];
                } catch (_unused7) {
                  console.warn("\u65E0\u6CD5\u89E3\u6790Array\u503C \"" + value + "\"\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C []");
                  return [];
                }
              }
              return Array.isArray(value) ? value : [];
            default:
              return value;
          }
        }
        /**
         * 从节点配置创建节点实例
         * @param nodeConfig 节点配置
         * @returns 创建的节点实例
         */;
        BehaviorTreeBuilder.createNodeFromConfig = function createNodeFromConfig(nodeConfig) {
          var _nodeConfig$propertie, _nodeConfig$propertie2, _nodeConfig$propertie3, _nodeConfig$propertie4, _nodeConfig$propertie5, _nodeConfig$propertie6;
          var node;
          // 根据节点类型创建对应的节点实例
          switch (nodeConfig.type) {
            // 复合节点
            case 'Sequence':
              var sequenceAbortValue = (_nodeConfig$propertie = nodeConfig.properties) == null || (_nodeConfig$propertie = _nodeConfig$propertie.abortType) == null ? void 0 : _nodeConfig$propertie.value;
              var sequenceAbortType = BehaviorTreeBuilder.getAbortType(typeof sequenceAbortValue === 'string' ? sequenceAbortValue : 'None');
              node = new Sequence(sequenceAbortType);
              break;
            case 'Selector':
              var selectorAbortValue = (_nodeConfig$propertie2 = nodeConfig.properties) == null || (_nodeConfig$propertie2 = _nodeConfig$propertie2.abortType) == null ? void 0 : _nodeConfig$propertie2.value;
              var selectorAbortType = BehaviorTreeBuilder.getAbortType(typeof selectorAbortValue === 'string' ? selectorAbortValue : 'None');
              node = new Selector(selectorAbortType);
              break;
            case 'Parallel':
              node = new Parallel();
              break;
            case 'ParallelSelector':
              node = new ParallelSelector();
              break;
            case 'RandomSelector':
              node = new RandomSelector();
              break;
            case 'RandomSequence':
              node = new RandomSequence();
              break;
            // 装饰器节点
            case 'AlwaysSucceed':
              node = new AlwaysSucceed();
              break;
            case 'AlwaysFail':
              node = new AlwaysFail();
              break;
            case 'Inverter':
              node = new Inverter();
              break;
            case 'Repeater':
              var countValue = (_nodeConfig$propertie3 = nodeConfig.properties) == null || (_nodeConfig$propertie3 = _nodeConfig$propertie3.count) == null ? void 0 : _nodeConfig$propertie3.value;
              var count = typeof countValue === 'number' ? countValue : 1;
              node = new Repeater(count);
              break;
            case 'UntilSuccess':
              node = new UntilSuccess();
              break;
            case 'UntilFail':
              node = new UntilFail();
              break;
            // 动作节点
            case 'LogAction':
              var messageValue = (_nodeConfig$propertie4 = nodeConfig.properties) == null || (_nodeConfig$propertie4 = _nodeConfig$propertie4.message) == null ? void 0 : _nodeConfig$propertie4.value;
              var message = typeof messageValue === 'string' ? messageValue : 'Default log message';
              node = new LogAction(message);
              break;
            case 'WaitAction':
              var waitTimeValue = (_nodeConfig$propertie5 = nodeConfig.properties) == null || (_nodeConfig$propertie5 = _nodeConfig$propertie5.waitTime) == null ? void 0 : _nodeConfig$propertie5.value;
              var waitTime = typeof waitTimeValue === 'number' ? waitTimeValue : 1.0;
              node = new WaitAction(waitTime);
              break;
            case 'ExecuteAction':
              // 对于自定义动作，我们创建一个默认的执行函数
              var actionCode = (_nodeConfig$propertie6 = nodeConfig.properties) == null || (_nodeConfig$propertie6 = _nodeConfig$propertie6.actionCode) == null ? void 0 : _nodeConfig$propertie6.value;
              if (actionCode && typeof actionCode === 'string') {
                try {
                  // 简单的代码执行（在实际项目中应该更安全地处理）
                  var actionFunc = new Function('context', 'TaskStatus', "\n                            const { Success, Failure, Running } = TaskStatus;\n                            " + actionCode + "\n                        ");
                  node = new ExecuteAction(function (context) {
                    try {
                      return actionFunc(context, TaskStatus);
                    } catch (error) {
                      console.error('执行动作失败:', error);
                      return TaskStatus.Failure;
                    }
                  });
                } catch (error) {
                  console.warn('解析动作代码失败，使用默认动作:', error);
                  node = new ExecuteAction(function () {
                    return TaskStatus.Success;
                  });
                }
              } else {
                node = new ExecuteAction(function () {
                  return TaskStatus.Success;
                });
              }
              break;
            default:
              console.warn('⚠️ 未知的节点类型:', nodeConfig.type, '，使用默认动作节点');
              node = new ExecuteAction(function () {
                return TaskStatus.Success;
              });
              break;
          }
          // 为复合节点和装饰器添加子节点
          if (nodeConfig.children && nodeConfig.children.length > 0) {
            if (node instanceof Composite) {
              // 复合节点可以有多个子节点
              for (var _iterator11 = _createForOfIteratorHelperLoose(nodeConfig.children), _step11; !(_step11 = _iterator11()).done;) {
                var childConfig = _step11.value;
                var childNode = BehaviorTreeBuilder.createNodeFromConfig(childConfig);
                node.addChild(childNode);
              }
            } else if (node instanceof Decorator) {
              // 装饰器只能有一个子节点
              if (nodeConfig.children.length > 1) {
                console.warn('⚠️ 装饰器节点只能有一个子节点，将使用第一个');
              }
              var _childNode = BehaviorTreeBuilder.createNodeFromConfig(nodeConfig.children[0]);
              node.child = _childNode;
            }
          }
          return node;
        }
        /**
         * 解析中止类型字符串为枚举值
         * @param value 中止类型字符串
         * @returns 对应的中止类型枚举值
         */;
        BehaviorTreeBuilder.getAbortType = function getAbortType(value) {
          switch (value) {
            case 'LowerPriority':
              return AbortTypes.LowerPriority;
            case 'Self':
              return AbortTypes.Self;
            case 'Both':
              return AbortTypes.Both;
            default:
              return AbortTypes.None;
          }
        }
        /**
         * 从JSON节点配置创建节点实例
         * @description 递归创建节点树，支持所有标准行为树节点类型
         * @param nodeConfig 当前节点配置
         * @param nodeMap 节点ID到配置的映射表
         * @param context 执行上下文
         * @returns 创建的节点实例
         */;
        BehaviorTreeBuilder.createNodeFromJSONConfig = function createNodeFromJSONConfig(nodeConfig, nodeMap, context) {
          var node;
          var props = nodeConfig.properties || {};
          // 根据节点类型创建对应的节点实例
          switch (nodeConfig.type) {
            // 根节点 - 通常是一个简单的传递节点
            case 'root':
              // 根节点本身不执行逻辑，直接处理第一个子节点
              if (nodeConfig.children && nodeConfig.children.length > 0) {
                var firstChildId = nodeConfig.children[0];
                var firstChildConfig = nodeMap.get(firstChildId);
                if (firstChildConfig) {
                  return BehaviorTreeBuilder.createNodeFromJSONConfig(firstChildConfig, nodeMap, context);
                }
              }
              // 如果没有子节点，创建一个默认成功节点
              node = new ExecuteAction(function () {
                return TaskStatus.Success;
              });
              break;
            // 复合节点
            case 'selector':
              var selectorAbortType = BehaviorTreeBuilder.getAbortType(String(props.abortType || 'None'));
              node = new Selector(selectorAbortType);
              break;
            case 'sequence':
              var sequenceAbortType = BehaviorTreeBuilder.getAbortType(String(props.abortType || 'None'));
              node = new Sequence(sequenceAbortType);
              break;
            case 'parallel':
              node = new Parallel();
              break;
            case 'parallel-selector':
              node = new ParallelSelector();
              break;
            case 'random-selector':
              node = new RandomSelector();
              break;
            case 'random-sequence':
              node = new RandomSequence();
              break;
            // 装饰器节点
            case 'repeater':
              var countProp = props.count;
              var count = typeof countProp === 'number' ? countProp : -1; // -1 表示无限重复
              node = new Repeater(count);
              break;
            case 'inverter':
              node = new Inverter();
              break;
            case 'always-succeed':
              node = new AlwaysSucceed();
              break;
            case 'always-fail':
              node = new AlwaysFail();
              break;
            case 'until-success':
              node = new UntilSuccess();
              break;
            case 'until-fail':
              node = new UntilFail();
              break;
            case 'conditional-decorator':
              // 创建条件装饰器 - 使用新的条件工厂
              var conditionConfig = nodeConfig.condition;
              // 根据conditionType属性确定条件类型
              if (props.conditionType === 'blackboardCompare') {
                conditionConfig = {
                  type: 'blackboard-value-comparison'
                };
              } else if (props.conditionType === 'eventCondition') {
                conditionConfig = {
                  type: 'event-condition'
                };
              } else if (props.conditionType === 'custom') {
                conditionConfig = {
                  type: 'condition-custom'
                };
              }
              // 使用条件工厂创建条件
              var conditionalNode = ConditionFactory.createCondition(conditionConfig, props, context);
              var shouldReevaluateValue = BehaviorTreeBuilder.extractNestedValue(props.shouldReevaluate);
              var shouldReevaluate = shouldReevaluateValue !== false && shouldReevaluateValue !== "false";
              var abortType = BehaviorTreeBuilder.getAbortType(BehaviorTreeBuilder.extractNestedValue(props.abortType) || 'None');
              node = new ConditionalDecorator(conditionalNode, shouldReevaluate, abortType);
              break;
            // 动作节点
            case 'log-action':
              var message = props.message || 'Default log message';
              // 支持变量替换
              node = new ExecuteAction(function (ctx) {
                var blackboard = ctx.blackboard;
                var finalMessage = message;
                // 简单的变量替换 {{variableName}}
                if (blackboard && typeof message === 'string') {
                  finalMessage = message.replace(/\{\{(\w+)\}\}/g, function (match, varName) {
                    var value = blackboard.getValue(varName);
                    return value !== undefined ? String(value) : match;
                  });
                }
                console.log("[BehaviorTree] " + finalMessage);
                if (ctx.log) {
                  ctx.log(finalMessage, props.logLevel || 'info');
                }
                return TaskStatus.Success;
              });
              break;
            case 'wait-action':
              var waitTimeProp = props.waitTime;
              var waitTime = typeof waitTimeProp === 'number' ? waitTimeProp : 1.0;
              node = new WaitAction(waitTime);
              break;
            case 'behavior-tree-reference':
              var subTreePath = props.subTreePath || props.treePath;
              if (subTreePath && typeof subTreePath === 'string') {
                try {
                  // 这里需要从路径加载子行为树
                  // 在实际应用中，应该有一个行为树管理器来处理这个
                  console.warn("behavior-tree-reference\u8282\u70B9\u9700\u8981\u5B9E\u73B0\u5B50\u884C\u4E3A\u6811\u52A0\u8F7D\u673A\u5236: " + subTreePath);
                  node = new ExecuteAction(function (ctx) {
                    console.log("\u6267\u884C\u5B50\u884C\u4E3A\u6811\u5F15\u7528: " + subTreePath);
                    return TaskStatus.Success;
                  });
                } catch (error) {
                  console.error('加载子行为树失败:', error);
                  node = new ExecuteAction(function () {
                    return TaskStatus.Failure;
                  });
                }
              } else {
                console.warn('behavior-tree-reference节点缺少subTreePath属性');
                node = new ExecuteAction(function () {
                  return TaskStatus.Failure;
                });
              }
              break;
            case 'execute-action':
              var actionCode = props.actionCode;
              if (actionCode && typeof actionCode === 'string') {
                try {
                  // 创建安全的执行函数
                  var actionFunc = new Function('context', 'TaskStatus', "\n                            const { Success, Failure, Running, Invalid } = TaskStatus;\n                            try {\n                                " + actionCode + "\n                            } catch (error) {\n                                console.error('\u52A8\u4F5C\u6267\u884C\u9519\u8BEF:', error);\n                                return TaskStatus.Failure;\n                            }\n                        ");
                  node = new ExecuteAction(function (ctx) {
                    try {
                      var result = actionFunc(ctx, TaskStatus);
                      return result || TaskStatus.Success;
                    } catch (error) {
                      console.error('执行动作失败:', error);
                      return TaskStatus.Failure;
                    }
                  });
                } catch (error) {
                  console.warn('解析动作代码失败，使用默认动作:', error);
                  node = new ExecuteAction(function () {
                    return TaskStatus.Success;
                  });
                }
              } else {
                node = new ExecuteAction(function () {
                  return TaskStatus.Success;
                });
              }
              break;
            // 条件节点
            case 'condition-random':
              var probabilityProp = props.successProbability;
              var probability = typeof probabilityProp === 'number' ? probabilityProp : 0.5;
              node = new ExecuteActionConditional(function () {
                return Math.random() < probability ? TaskStatus.Success : TaskStatus.Failure;
              });
              break;
            case 'condition-custom':
              var conditionCodeProp = props.conditionCode;
              var conditionCode = typeof conditionCodeProp === 'string' ? conditionCodeProp : typeof conditionCodeProp === 'object' && conditionCodeProp && 'value' in conditionCodeProp ? String(conditionCodeProp.value) : undefined;
              if (conditionCode && typeof conditionCode === 'string') {
                try {
                  var condFunc = new Function('context', "\n                            try {\n                                " + conditionCode + "\n                            } catch (error) {\n                                console.error('\u6761\u4EF6\u68C0\u67E5\u9519\u8BEF:', error);\n                                return false;\n                            }\n                        ");
                  node = new ExecuteActionConditional(function (ctx) {
                    try {
                      var result = condFunc(ctx);
                      return result ? TaskStatus.Success : TaskStatus.Failure;
                    } catch (error) {
                      console.error('条件检查失败:', error);
                      return TaskStatus.Failure;
                    }
                  });
                } catch (error) {
                  console.warn('解析条件代码失败:', error);
                  node = new ExecuteActionConditional(function () {
                    return TaskStatus.Failure;
                  });
                }
              } else {
                node = new ExecuteActionConditional(function () {
                  return TaskStatus.Success;
                });
              }
              break;
            case 'condition-numeric':
              node = new ExecuteActionConditional(function (ctx) {
                var conditional = new NumericComparison(String(props.propertyPath || 'value'), String(props.compareOperator || 'equal'), Number(props.compareValue) || 0);
                return conditional.update(ctx);
              });
              break;
            case 'condition-property':
              node = new ExecuteActionConditional(function (ctx) {
                var conditional = new PropertyExists(String(props.propertyPath || 'property'));
                return conditional.update(ctx);
              });
              break;
            // 事件驱动节点
            case 'event-action':
              var eventActionName = props.eventName;
              if (eventActionName && typeof eventActionName === 'string') {
                node = new ExecuteAction(function (ctx) {
                  try {
                    var _eventRegistry$handle2;
                    // 从上下文中获取事件注册表
                    var eventRegistry = ctx.eventRegistry;
                    if (!eventRegistry) {
                      console.warn("[event-action] \u672A\u627E\u5230\u4E8B\u4EF6\u6CE8\u518C\u8868\uFF0C\u8BF7\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u63D0\u4F9B eventRegistry");
                      return TaskStatus.Failure;
                    }
                    // 获取事件处理器
                    var handler = eventRegistry.getActionHandler ? eventRegistry.getActionHandler(eventActionName) : (_eventRegistry$handle2 = eventRegistry.handlers) == null ? void 0 : _eventRegistry$handle2.get(eventActionName);
                    if (!handler) {
                      console.warn("[event-action] \u672A\u627E\u5230\u4E8B\u4EF6\u5904\u7406\u5668: " + eventActionName);
                      return TaskStatus.Failure;
                    }
                    // 解析参数
                    var parameters = {};
                    if (props.parameters) {
                      if (typeof props.parameters === 'string') {
                        try {
                          parameters = JSON.parse(props.parameters);
                        } catch (e) {
                          console.warn("[event-action] \u53C2\u6570\u89E3\u6790\u5931\u8D25: " + props.parameters);
                        }
                      } else {
                        parameters = props.parameters;
                      }
                      // 支持黑板变量替换
                      var blackboard = ctx.blackboard;
                      if (blackboard) {
                        parameters = BehaviorTreeBuilder.replaceBlackboardVariables(parameters, blackboard);
                      }
                    }
                    // 执行事件处理器
                    var result = handler(ctx, parameters);
                    // 处理异步结果
                    if (result instanceof Promise) {
                      if (props.async !== false) {
                        result.then(function (asyncResult) {
                          console.log("[event-action] \u5F02\u6B65\u4E8B\u4EF6 " + eventActionName + " \u5B8C\u6210: " + asyncResult);
                        })["catch"](function (error) {
                          console.error("[event-action] \u5F02\u6B65\u4E8B\u4EF6 " + eventActionName + " \u5931\u8D25:", error);
                        });
                        return TaskStatus.Running;
                      } else {
                        console.warn("[event-action] \u4E8B\u4EF6 " + eventActionName + " \u8FD4\u56DEPromise\u4F46\u672A\u6807\u8BB0\u4E3A\u5F02\u6B65\uFF0C\u5C06\u963B\u585E\u6267\u884C");
                        return TaskStatus.Running;
                      }
                    }
                    // 处理同步结果
                    if (typeof result === 'string') {
                      switch (result.toLowerCase()) {
                        case 'success':
                          return TaskStatus.Success;
                        case 'failure':
                          return TaskStatus.Failure;
                        case 'running':
                          return TaskStatus.Running;
                        default:
                          return TaskStatus.Success;
                      }
                    }
                    return result === true ? TaskStatus.Success : result === false ? TaskStatus.Failure : TaskStatus.Success;
                  } catch (error) {
                    console.error("[event-action] \u4E8B\u4EF6 " + eventActionName + " \u6267\u884C\u5931\u8D25:", error);
                    return TaskStatus.Failure;
                  }
                });
              } else {
                console.warn('[event-action] 缺少 eventName 属性');
                node = new ExecuteAction(function () {
                  return TaskStatus.Failure;
                });
              }
              break;
            case 'event-condition':
              var eventConditionName = props.eventName;
              if (eventConditionName && typeof eventConditionName === 'string') {
                node = new ExecuteActionConditional(function (ctx) {
                  try {
                    var _eventRegistry$handle3;
                    // 从上下文中获取事件注册表
                    var eventRegistry = ctx.eventRegistry;
                    if (!eventRegistry) {
                      console.warn("[event-condition] \u672A\u627E\u5230\u4E8B\u4EF6\u6CE8\u518C\u8868\uFF0C\u8BF7\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u63D0\u4F9B eventRegistry");
                      return TaskStatus.Failure;
                    }
                    // 获取条件处理器
                    var checker = eventRegistry.getConditionHandler ? eventRegistry.getConditionHandler(eventConditionName) : (_eventRegistry$handle3 = eventRegistry.handlers) == null ? void 0 : _eventRegistry$handle3.get(eventConditionName);
                    if (!checker) {
                      console.warn("[event-condition] \u672A\u627E\u5230\u6761\u4EF6\u5904\u7406\u5668: " + eventConditionName);
                      return TaskStatus.Failure;
                    }
                    // 解析参数
                    var parameters = {};
                    if (props.parameters) {
                      if (typeof props.parameters === 'string') {
                        try {
                          parameters = JSON.parse(props.parameters);
                        } catch (e) {
                          console.warn("[event-condition] \u53C2\u6570\u89E3\u6790\u5931\u8D25: " + props.parameters);
                        }
                      } else {
                        parameters = props.parameters;
                      }
                      // 支持黑板变量替换
                      var blackboard = ctx.blackboard;
                      if (blackboard) {
                        parameters = BehaviorTreeBuilder.replaceBlackboardVariables(parameters, blackboard);
                      }
                    }
                    // 执行条件检查
                    var result = checker(ctx, parameters);
                    // 处理异步结果
                    if (result instanceof Promise) {
                      console.warn("[event-condition] \u6761\u4EF6 " + eventConditionName + " \u8FD4\u56DEPromise\uFF0C\u6761\u4EF6\u8282\u70B9\u4E0D\u652F\u6301\u5F02\u6B65\u64CD\u4F5C");
                      return TaskStatus.Failure;
                    }
                    return result ? TaskStatus.Success : TaskStatus.Failure;
                  } catch (error) {
                    console.error("[event-condition] \u6761\u4EF6 " + eventConditionName + " \u68C0\u67E5\u5931\u8D25:", error);
                    return TaskStatus.Failure;
                  }
                });
              } else {
                console.warn('[event-condition] 缺少 eventName 属性');
                node = new ExecuteActionConditional(function () {
                  return TaskStatus.Failure;
                });
              }
              break;
            // ========== 黑板动作节点 ==========
            case 'set-blackboard-value':
              var rawVariableName = String(props.variableName || 'variable');
              // 清理变量名，移除黑板变量引用语法 {{variableName}}
              var setVariableName = rawVariableName.replace(/^\{\{|\}\}$/g, '');
              var setValue = props.value;
              var setSourceVariable = props.sourceVariable ? String(props.sourceVariable).replace(/^\{\{|\}\}$/g, '') : undefined;
              var setForce = props.force === true;
              node = new SetBlackboardValue(setVariableName, setValue, setSourceVariable, setForce);
              break;
            case 'add-to-blackboard':
            case 'add-blackboard-value':
              node = new AddToBlackboardValue(String(props.variableName || 'variable'), Number(props.increment) || 1, props.incrementVariable ? String(props.incrementVariable) : undefined);
              break;
            case 'toggle-blackboard-bool':
              node = new ToggleBlackboardBool(String(props.variableName || 'variable'));
              break;
            case 'reset-blackboard-variable':
              node = new ResetBlackboardVariable(String(props.variableName || 'variable'));
              break;
            case 'math-blackboard-operation':
              var mathOperation = String(props.operation || 'add');
              var mathOperand2Value = typeof props.operand2 === 'string' ? props.operand2 : Number(props.operand2 || 0);
              node = new MathBlackboardOperation(String(props.targetVariable || 'result'), String(props.operand1Variable || 'operand1'), mathOperand2Value, MathOperation[mathOperation] || MathOperation.Add);
              break;
            case 'log-blackboard-value':
              node = new LogBlackboardValue(String(props.variableName || 'variable'), String(props.prefix || '[Blackboard]'));
              break;
            case 'wait-blackboard-condition':
              var waitVarName = String(props.variableName || 'variable');
              var expectedValue = props.expectedValue;
              node = new WaitForBlackboardCondition(waitVarName, expectedValue);
              break;
            // ========== 黑板条件节点 ==========
            case 'blackboard-value-comparison':
              var operatorStr = String(props.operator || props.compareOperator || 'equal');
              // 映射操作符字符串到枚举
              var operator;
              switch (operatorStr.toLowerCase()) {
                case 'equal':
                  operator = CompareOperator.Equal;
                  break;
                case 'notequal':
                case 'not_equal':
                  operator = CompareOperator.NotEqual;
                  break;
                case 'greater':
                  operator = CompareOperator.Greater;
                  break;
                case 'greaterorequal':
                case 'greater_or_equal':
                  operator = CompareOperator.GreaterOrEqual;
                  break;
                case 'less':
                  operator = CompareOperator.Less;
                  break;
                case 'lessorequal':
                case 'less_or_equal':
                  operator = CompareOperator.LessOrEqual;
                  break;
                case 'contains':
                  operator = CompareOperator.Contains;
                  break;
                case 'notcontains':
                case 'not_contains':
                  operator = CompareOperator.NotContains;
                  break;
                default:
                  operator = CompareOperator.Equal;
                  break;
              }
              node = new ExecuteActionConditional(function (ctx) {
                var conditional = new BlackboardValueComparison(String(props.variableName || 'variable'), operator, props.compareValue, props.compareVariable ? String(props.compareVariable) : undefined);
                return conditional.update(ctx);
              });
              break;
            case 'blackboard-variable-exists':
              node = new ExecuteActionConditional(function (ctx) {
                var conditional = new BlackboardVariableExists(String(props.variableName || 'variable'), props.invert === true);
                return conditional.update(ctx);
              });
              break;
            case 'blackboard-variable-type-check':
              var expectedTypeStr = String(props.expectedType || 'string');
              // 映射类型字符串到枚举
              var expectedType = BehaviorTreeBuilder.mapToBlackboardType(expectedTypeStr);
              node = new ExecuteActionConditional(function (ctx) {
                var conditional = new BlackboardVariableTypeCheck(String(props.variableName || 'variable'), expectedType);
                return conditional.update(ctx);
              });
              break;
            case 'blackboard-variable-range-check':
              node = new ExecuteActionConditional(function (ctx) {
                var conditional = new BlackboardVariableRangeCheck(String(props.variableName || 'variable'), Number(props.minValue) || 0, Number(props.maxValue) || 100);
                return conditional.update(ctx);
              });
              break;
            // ========== 通用条件节点 ==========
            case 'numeric-comparison':
              node = new ExecuteActionConditional(function (ctx) {
                var conditional = new NumericComparison(String(props.propertyPath || 'value'), String(props.compareOperator || 'equal'), Number(props.compareValue) || 0);
                return conditional.update(ctx);
              });
              break;
            case 'property-exists':
              node = new ExecuteActionConditional(function (ctx) {
                var conditional = new PropertyExists(String(props.propertyPath || 'property'));
                return conditional.update(ctx);
              });
              break;
            // ========== 高级装饰器节点 ==========
            case 'cooldown':
              var cooldownTime = Number(props.cooldownTime) || 1.0;
              node = new CooldownDecorator(cooldownTime);
              break;
            case 'timeout':
              var timeoutDuration = Number(props.timeoutDuration) || 5.0;
              node = new TimeoutDecorator(timeoutDuration);
              break;
            case 'chance':
              var successChance = Number(props.successChance) || 0.5;
              node = new ChanceDecorator(successChance);
              break;
            default:
              console.warn('⚠️ 未知的节点类型:', nodeConfig.type, '，使用默认成功节点');
              node = new ExecuteAction(function () {
                return TaskStatus.Success;
              });
              break;
          }
          // 为复合节点和装饰器添加子节点
          if (nodeConfig.children && nodeConfig.children.length > 0) {
            if (node instanceof Composite) {
              // 复合节点可以有多个子节点
              for (var _iterator12 = _createForOfIteratorHelperLoose(nodeConfig.children), _step12; !(_step12 = _iterator12()).done;) {
                var childId = _step12.value;
                var childConfig = nodeMap.get(childId);
                if (childConfig) {
                  var childNode = BehaviorTreeBuilder.createNodeFromJSONConfig(childConfig, nodeMap, context);
                  node.addChild(childNode);
                } else {
                  console.warn("\u26A0\uFE0F \u672A\u627E\u5230\u5B50\u8282\u70B9\u914D\u7F6E: " + childId);
                }
              }
            } else if (node instanceof Decorator) {
              // 装饰器只能有一个子节点
              if (nodeConfig.children.length > 1) {
                console.warn('⚠️ 装饰器节点只能有一个子节点，将使用第一个');
              }
              var _childId = nodeConfig.children[0];
              var _childConfig = nodeMap.get(_childId);
              if (_childConfig) {
                var _childNode2 = BehaviorTreeBuilder.createNodeFromJSONConfig(_childConfig, nodeMap, context);
                node.child = _childNode2;
              } else {
                console.warn("\u26A0\uFE0F \u672A\u627E\u5230\u5B50\u8282\u70B9\u914D\u7F6E: " + _childId);
              }
            }
          }
          return node;
        }
        /**
         * 创建条件函数
         * @param condition 条件配置
         * @param context 执行上下文
         * @returns 条件检查函数
         */;
        BehaviorTreeBuilder.createConditionFunction = function createConditionFunction(condition, context) {
          if (!condition) {
            return function () {
              return TaskStatus.Success;
            };
          }
          if (condition.type === 'condition-custom') {
            var _condition$properties;
            var conditionCodeConfig = (_condition$properties = condition.properties) == null ? void 0 : _condition$properties.conditionCode;
            var conditionCode = typeof conditionCodeConfig === 'string' ? conditionCodeConfig : typeof conditionCodeConfig === 'object' && conditionCodeConfig && 'value' in conditionCodeConfig ? String(conditionCodeConfig.value) : undefined;
            if (conditionCode && typeof conditionCode === 'string') {
              try {
                var condFunc = new Function('context', "\n                        try {\n                            return (" + conditionCode + ")(context);\n                        } catch (error) {\n                            console.error('\u6761\u4EF6\u51FD\u6570\u6267\u884C\u9519\u8BEF:', error);\n                            return false;\n                        }\n                    ");
                return function (ctx) {
                  try {
                    var result = condFunc(ctx);
                    return result ? TaskStatus.Success : TaskStatus.Failure;
                  } catch (error) {
                    console.error('条件函数执行失败:', error);
                    return TaskStatus.Failure;
                  }
                };
              } catch (error) {
                console.warn('解析条件函数失败:', error);
              }
            }
          }
          return function () {
            return TaskStatus.Success;
          };
        }
        /**
         * 替换对象中的黑板变量引用
         * @param obj 要处理的对象
         * @param blackboard 黑板实例
         * @returns 替换后的对象
         */;
        BehaviorTreeBuilder.replaceBlackboardVariables = function replaceBlackboardVariables(obj, blackboard) {
          if (obj === null || obj === undefined) {
            return obj;
          }
          if (typeof obj === 'string') {
            // 检查是否是纯黑板变量引用（如 "{{variableName}}"）
            var pureVariableMatch = obj.match(/^{{\s*(\w+)\s*}}$/);
            if (pureVariableMatch) {
              // 纯变量引用，返回原始类型的值
              var varName = pureVariableMatch[1];
              var value = blackboard.getValue(varName);
              if (value !== undefined) {
                return value; // 保持原始类型
              }

              return obj; // 变量不存在，返回原字符串
            }
            // 包含变量的字符串模板，进行字符串替换
            return obj.replace(/\{\{(\w+)\}\}/g, function (match, varName) {
              var value = blackboard.getValue(varName);
              return value !== undefined ? String(value) : match;
            });
          }
          if (Array.isArray(obj)) {
            // 处理数组
            return obj.map(function (item) {
              return BehaviorTreeBuilder.replaceBlackboardVariables(item, blackboard);
            });
          }
          if (typeof obj === 'object') {
            // 处理对象
            var result = {};
            for (var _i3 = 0, _Object$entries2 = Object.entries(obj); _i3 < _Object$entries2.length; _i3++) {
              var _Object$entries2$_i = _Object$entries2[_i3],
                key = _Object$entries2$_i[0],
                _value = _Object$entries2$_i[1];
              result[key] = BehaviorTreeBuilder.replaceBlackboardVariables(_value, blackboard);
            }
            return result;
          }
          return obj;
        }
        /**
         * 提取嵌套属性值
         * @param prop 属性配置对象或直接值
         * @returns 提取的值
         */;
        BehaviorTreeBuilder.extractNestedValue = function extractNestedValue(prop) {
          if (prop === null || prop === undefined) {
            return prop;
          }
          // 如果是简单值，直接返回
          if (typeof prop !== 'object') {
            return prop;
          }
          // 如果有value属性，递归提取
          if ('value' in prop) {
            return BehaviorTreeBuilder.extractNestedValue(prop.value);
          }
          return prop;
        };
        return BehaviorTreeBuilder;
      }());
      /**
       * 事件注册表类
       * 管理行为树中的动作和条件事件处理器
       * 支持精确匹配和正则表达式匹配
       *
       * @example
       * ```typescript
       * // 定义自定义上下文类型
       * interface GameContext extends IBehaviorTreeContext {
       *     player: Player;
       *     enemies: Enemy[];
       * }
       *
       * // 定义参数类型
       * interface MoveParams {
       *     targetX: number;
       *     targetY: number;
       *     speed?: number;
       * }
       *
       * const registry = new EventRegistry();
       *
       * // 注册精确匹配的动作处理器
       * registry.registerAction<GameContext, MoveParams>(
       *     'move-to',
       *     (context, params) => {
       *         context.player.moveTo(params.targetX, params.targetY, params.speed || 1);
       *         return 'success';
       *     }
       * );
       *
       * // 注册正则表达式动作处理器 - 匹配所有以 "enemy." 开头的事件
       * registry.registerActionRegex<GameContext>(
       *     /^enemy\..+$/,
       *     (context, params) => {
       *         // 处理所有敌人相关的动作：enemy.attack, enemy.move, enemy.die 等
       *         console.log('处理敌人动作:', params);
       *         return 'success';
       *     }
       * );
       *
       * // 注册正则表达式条件检查器 - 匹配所有以 "player." 开头的条件
       * registry.registerConditionRegex<GameContext>(
       *     /^player\..+$/,
       *     (context, params) => {
       *         // 处理所有玩家相关的条件：player.alive, player.hasItem, player.canMove 等
       *         return context.player.health > 0;
       *     }
       * );
       *
       * // 异步动作示例
       * registry.registerAction<GameContext>(
       *     'async-action',
       *     async (context) => {
       *         await context.player.performComplexAction();
       *         return 'success';
       *     }
       * );
       * ```
       */
      var EventRegistry = exports('EventRegistry', /*#__PURE__*/function () {
        function EventRegistry() {
          this.actionHandlers = new Map();
          this.conditionHandlers = new Map();
          // 正则表达式处理器存储
          this.regexActionHandlers = new Map();
          this.regexConditionHandlers = new Map();
        }
        /**
         * 注册动作处理器
         * @template TContext 上下文类型
         * @template TParams 参数类型
         * @param eventName 事件名称
         * @param handler 处理器函数，必须返回 ActionResult 类型
         */
        var _proto46 = EventRegistry.prototype;
        _proto46.registerAction = function registerAction(eventName, handler) {
          this.actionHandlers.set(eventName, handler);
        }
        /**
         * 注册正则表达式动作处理器
         * @template TContext 上下文类型
         * @template TParams 参数类型
         * @param eventPattern 事件名称正则表达式
         * @param handler 处理器函数，必须返回 ActionResult 类型
         */;
        _proto46.registerActionRegex = function registerActionRegex(eventPattern, handler) {
          this.regexActionHandlers.set(eventPattern, handler);
        }
        /**
         * 注册条件检查器
         * @template TContext 上下文类型
         * @template TParams 参数类型
         * @param eventName 事件名称
         * @param checker 检查器函数，必须返回 boolean 类型
         */;
        _proto46.registerCondition = function registerCondition(eventName, checker) {
          this.conditionHandlers.set(eventName, checker);
        }
        /**
         * 注册正则表达式条件检查器
         * @template TContext 上下文类型
         * @template TParams 参数类型
         * @param eventPattern 事件名称正则表达式
         * @param checker 检查器函数，必须返回 boolean 类型
         */;
        _proto46.registerConditionRegex = function registerConditionRegex(eventPattern, checker) {
          this.regexConditionHandlers.set(eventPattern, checker);
        }
        /**
         * 获取动作处理器
         * @param eventName 事件名称
         * @returns 处理器函数或undefined
         */;
        _proto46.getActionHandler = function getActionHandler(eventName) {
          var exactMatch = this.actionHandlers.get(eventName);
          if (exactMatch) {
            return exactMatch;
          }
          for (var _iterator16 = _createForOfIteratorHelperLoose(this.regexActionHandlers), _step16; !(_step16 = _iterator16()).done;) {
            var _step16$value = _step16.value,
              pattern = _step16$value[0],
              handler = _step16$value[1];
            if (pattern.test(eventName)) {
              return handler;
            }
          }
          return undefined;
        }
        /**
         * 获取条件检查器
         * @param eventName 事件名称
         * @returns 检查器函数或undefined
         */;
        _proto46.getConditionHandler = function getConditionHandler(eventName) {
          var exactMatch = this.conditionHandlers.get(eventName);
          if (exactMatch) {
            return exactMatch;
          }
          for (var _iterator17 = _createForOfIteratorHelperLoose(this.regexConditionHandlers), _step17; !(_step17 = _iterator17()).done;) {
            var _step17$value = _step17.value,
              pattern = _step17$value[0],
              handler = _step17$value[1];
            if (pattern.test(eventName)) {
              return handler;
            }
          }
          return undefined;
        };
        _proto46.getAllEventNames = function getAllEventNames() {
          var actionNames = Array.from(this.actionHandlers.keys());
          var conditionNames = Array.from(this.conditionHandlers.keys());
          return [].concat(new Set([].concat(actionNames, conditionNames)));
        }
        /**
         * 获取所有正则表达式模式
         * @returns 包含所有注册的正则表达式模式的数组
         */;
        _proto46.getAllRegexPatterns = function getAllRegexPatterns() {
          var actionPatterns = Array.from(this.regexActionHandlers.keys());
          var conditionPatterns = Array.from(this.regexConditionHandlers.keys());
          return [].concat(new Set([].concat(actionPatterns, conditionPatterns)));
        }
        /**
         * 测试事件名是否匹配任何已注册的处理器（包括正则表达式）
         * @param eventName 事件名称
         * @returns 是否有匹配的处理器
         */;
        _proto46.hasHandler = function hasHandler(eventName) {
          return this.getActionHandler(eventName) !== undefined || this.getConditionHandler(eventName) !== undefined;
        };
        _proto46.clear = function clear() {
          this.actionHandlers.clear();
          this.conditionHandlers.clear();
          this.regexActionHandlers.clear();
          this.regexConditionHandlers.clear();
        };
        return EventRegistry;
      }());
    }
  };
});

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        arrayLikeToArray: _arrayLikeToArray,
        assertThisInitialized: _assertThisInitialized,
        asyncToGenerator: _asyncToGenerator,
        createClass: _createClass,
        createForOfIteratorHelperLoose: _createForOfIteratorHelperLoose,
        extends: _extends,
        inheritsLoose: _inheritsLoose,
        initializerDefineProperty: _initializerDefineProperty,
        regeneratorRuntime: _regeneratorRuntime,
        setPrototypeOf: _setPrototypeOf,
        toPrimitive: _toPrimitive,
        toPropertyKey: _toPropertyKey,
        unsupportedIterableToArray: _unsupportedIterableToArray
      });
      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = exports('regeneratorRuntime', function () {
          return e;
        });
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = Object.defineProperty || function (t, e, r) {
            t[e] = r.value;
          },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e];
        }
        try {
          define({}, "");
        } catch (t) {
          define = function (t, e, r) {
            return t[e] = r;
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
          }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart",
          l = "suspendedYield",
          f = "executing",
          s = "completed",
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                invoke("next", t, i, a);
              }, function (t) {
                invoke("throw", t, i, a);
              }) : e.resolve(h).then(function (t) {
                u.value = t, i(u);
              }, function (t) {
                return invoke("throw", t, i, a);
              });
            }
            a(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function (t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
              if ("throw" === i) throw a;
              return {
                value: t,
                done: !0
              };
            }
            for (n.method = i, n.arg = a;;) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === h) throw o = s, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ("normal" === p.type) {
                if (o = n.done ? s : l, p.arg === y) continue;
                return {
                  value: p.arg,
                  done: n.done
                };
              }
              "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
          var i = tryCatch(o, e.iterator, r.arg);
          if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
          var a = i.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
        }
        function pushTryEntry(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }
        function Context(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                  return next.value = t, next.done = !0, next;
                };
              return i.next = i;
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, e.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
        }, e.awrap = function (t) {
          return {
            __await: t
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new AsyncIterator(wrap(t, r, n, o), i);
          return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
          return this;
        }), define(g, "toString", function () {
          return "[object Generator]";
        }), e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return r.reverse(), function next() {
            for (; r.length;) {
              var t = r.pop();
              if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
              return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return handle("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  resetTryEntry(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return this.delegate = {
              iterator: values(e),
              resultName: r,
              nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _extends() {
        _extends = exports('extends', Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        });
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

} }; });