<?php 
$quoteoftheday = shell_exec("python ../webscraper/quoteofday.py");
echo $quoteoftheday;
?>