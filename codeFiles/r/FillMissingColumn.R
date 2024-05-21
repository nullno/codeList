# 实现多列数据的缺失值填充

# 使用内置函数：

# 1.coalesce() 函数：可以将多个列中的非缺失值连接在一起，并将缺失值替换为 NA。
# 例如，对于一个包含多列数据的 data.frame，可以使用以下代码将非缺失值连接到第一列：
data <- data.frame(actor1=c("A","B",NA,"C",NA), actor2=c(NA, "Z", "W", NA, "X"), actor3=c("L","M","N","O","P"))
coalesce(data, "actor1")

# 2.replace_na() 函数：可以用指定的值替换缺失值。例如，用每一列的众数替换该列的缺失值：
df <- data.frame(x1 = c(1,2,NA,4,5), x2 = c(NA,2,3,NA,5), x3 = c(1,2,3,4,NA))
df %>% select(Pclass, Sex, SibSp, Embarked) %>% map_dfc(~ replace_na(.x, rstatix::get_mode(.x)(1)))


# 自定义函数：
mean_impute <- function(data) {
  for (col in colnames(data)) {
    col_mean <- mean(data[[col]], na.rm = TRUE)
    data[[col]](is.na(data[[col]])) <- col_mean
  }
  return(data)
}
# 使用自定义函数填充缺失值
filled_data <- mean_impute(data)

# 使用 tidyverse 包：
# tidyverse 包提供了一些方便的数据处理和分析工具。例如，可以使用 fill() 函数来填充缺失值：
library(tidyverse)
df <- data.frame(x1 = c(1,2,NA,4,5), x2 = c(NA,2,3,NA,5), x3 = c(1,2,3,4,NA))
df %>% fill(x1, x2, x3)
