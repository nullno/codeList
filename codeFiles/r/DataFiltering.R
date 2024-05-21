# 数据清洗的常用代码

# 缺失值处理：
    data[is.na(data)] <- 0  # 将缺失值替换为 0

# 异常值处理：
    data <- data[!(data > threshold), ]  # 剔除超出阈值的数据

# 数据类型转换：
    data$column <- as.numeric(data$column)  # 将某列转换为数值型

# 数据合并：
    merged_data <- merge(data1, data2, by = "common_column")  # 按共同列合并数据

# 重复值处理：
    data <- unique(data)  # 去除重复行