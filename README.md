# 记录项目过程中遇到的坑
## mysql库的坑
1. 使用 `util.promisify`将 `mysql` 的老式的 `Error first callback` : `query` 方法转换成 `promise` 对象  [参考链接](https://www.cnblogs.com/jiasm/p/9808113.html)
2. 