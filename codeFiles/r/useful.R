# R语言常用代码整理

# 定义一个函数，计算两个数值的和
add_numbers <- function(a, b) {
  return(a + b)
}
 
# 使用dplyr包进行数据过滤
library(dplyr)
filtered_data <- starwars %>% filter(species == "Human")
 
# 使用ggplot2进行数据可视化
library(ggplot2)
ggplot(mtcars, aes(x=wt, y=mpg)) + geom_point()
 
# 使用stringr包进行字符串操作
library(stringr)
str_trim("  Hello World!  ")
 
# 使用lubridate包进行日期操作
library(lubridate)
today()
 
# 使用rvest包进行网页数据抓取
library(rvest)
read_html("https://www.example.com") %>% html_nodes("title") %>% html_text()
 
# 使用shiny包创建一个简单的交互式应用
library(shiny)
ui <- fluidPage(
  textInput("name", "Enter your name"),
  actionButton("greet", "Say hello")
)
server <- function(input, output, session) {
  observeEvent(input$greet, {
    showNotification(paste("Hello,", input$name))
  })
}
shinyApp(ui = ui, server = server)