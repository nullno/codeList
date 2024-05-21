# 使用R语言进行缺失值填充

# 使用均值填充：
    data[is.na(data)] <- mean(data, na.rm = TRUE)

# 使用中位数填充：
    data[is.na(data)] <- median(data, na.rm = TRUE)

# 使用前一个或后一个非缺失值填充：
    data <- na.locf(data)  # 向前填充

# 使用随机值填充：
    data[is.na(data)] <- runif(sum(is.na(data)))