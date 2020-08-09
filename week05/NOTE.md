为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
因为 float 属性属性指定一个元素，但::first-line 不能匹配任何真实存在的html元素。所以 first-line不能设置 float