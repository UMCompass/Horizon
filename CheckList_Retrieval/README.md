
AJAX/JS/PHP
============
<BLOCKQUOTE>

<p> This first variation utilizes JQuery's AJAX method. Given a database with a table named CheckList with two columns, Item and Age, jquery uses ajax to call connect.php and posts the data sent. (post is PHP variable, and the data in this case is a variable called 'regs' that holds the value 'value'. It can be a number as well). The php file receives the variable that was posted, and the if statement checks if the value is equivalent to "success". If it is, query the database, push it into an array A, and then encode that into JSON and return. 

This method should work for the most part I think. Instead of doing something like Controller.getList, we'd have to pass in an ID, and then the php file would check it and decide what to do </p> 


</BLOCKQUOTE>

ALL PHP
===========
<BLOCKQUOTE>
<p> Alternatively, I have an implementation with PHP objects that most closely resembles the Controller setup that Noah had in the email. For this to work, we'd just have to add some php to include the main php file in the webpage, and then make a new object and call methods off that. 
</BLOCKQUOTE>



There are some bugs in the first implmentation, and maybe the second one as well. Depending on what we want to do / how we implement things, one of these variations might be more desirable over the other. It's also possible that there's a better way of doing things that was shown in class using Express that I'm missing.
