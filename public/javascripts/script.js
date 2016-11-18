$(document).ready(function(){

    $.ajax({      
        type:'GET',
        url:'http://jolse.ipdisk.co.kr:10000/api/books',
        success:function(data){   

            $.each(data,function(index){

                var tr = $('<tr>');
                var td_book = $('<td>');
                var td_name = $('<td>');
                var td_time = $('<td>');
                var td_del = $('<td>').addClass('del');

                tr.attr('id',data[index]._id);
                td_book.text(data[index].title);
                td_name.text(data[index].author);
                td_time.text(data[index].published_date);
                td_del.text('삭제');

                tr.append(td_book).append(td_name).append(td_time).append(td_del);
                $('#booklist table tbody').append(tr);
            });
        },   
        error:function(e){  
            console.log(e);
        }  
    });  

    $('#add').click(function(){

        var title = $('#book_title').val();
        var author = $('#book_name').val();
        var date = $('#book_time').val();

        var book = {

            "title" : title,
            "author" : author,
            "published_date" : date
        };

        $.ajax({      
            type:'POST',
            url:'http://jolse.ipdisk.co.kr:10000/api/books',
            data:book,
            dataType:'JSON',
            success:function(data){   

                if ( data ) {

                    var tr = $('<tr>');
                    var td_book = $('<td>');
                    var td_name = $('<td>');
                    var td_time = $('<td>');
                    var td_del = $('<td>').addClass('del');

                    tr.attr('id',data.result);
                    td_book.text(title);
                    td_name.text(author);
                    td_time.text(date);
                    td_del.text('삭제');

                    tr.append(td_book).append(td_name).append(td_time).append(td_del);
                    $('#booklist table tbody').append(tr);

                    $('#book_title').val('');
                    $('#book_name').val('');
                    $('#book_time').val('');
                }
            },   
            error:function(e){  
                console.log(e);
            }  
        });  
    });

    $(document).on('click','.del',function(){

        var selector = $(this).parent();
        var del = $(this).parent().attr('id');

        $.ajax({      
            type:'DELETE',
            url:'http://jolse.ipdisk.co.kr:10000/api/books/' + del,
            success:function(data){   

                selector.remove();
            },   
            error:function(e){  
                console.log(e);
            }  
        });  
    });
});