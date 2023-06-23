$(document).ready(function(){
    $('.form-check-input').on('change', function(){
        var ch = $(this);
        var sibl = ch.parent().siblings();
        var count = 0;
        if (ch.is(':checked')){
            count += 1;
        }
        sibl.each(function(){
            if ($(this).find('.form-check-input').is(':checked')){
                count += 1;
            }
        });
        if(ch.parent().siblings('.form-label').hasClass('c1')){
            if (count == 0){
                sibl.each(function(){
                        $(this).find('.form-check-input').prop('disabled',false);
                });
            };
            if (count > 0){
                sibl.each(function(){
                    if ($(this).find('.form-check-input').prop('checked') == false){
                        $(this).find('.form-check-input').prop('disabled',true);
                    }
                });
            }
        }else if(ch.parent().siblings('.form-label').hasClass('c2')){
            if (count == 0 || count == 1){
                sibl.each(function(){
                        $(this).find('.form-check-input').prop('disabled',false);
                });
            };
            if (count > 1){
                sibl.each(function(){
                    if ($(this).find('.form-check-input').prop('checked') == false){
                        $(this).find('.form-check-input').prop('disabled',true);
                    }
                });
            }
        }
    });

    $('#my_form').on('submit',function(e){
        e.preventDefault();
        var answers = [];
        $('.form-check-input').each(function(){
            if ($(this).prop('checked')){
                var temp = $(this).attr('id').split('-');
                answers.push(temp[1]+'-'+temp[2]);
            }
        });
//        console.log(answers);
        var result = [0,0,0,0,0];
        var table = [
            [4,2,3,1,5],
            [1,3,4,2,5],
            [3,2,5,4,1],
            [1,2,4,3,5],
            [1,2,3,5,4],
            [0,0,0,0,0],
            [1,1,3,3,0],
            [1,3,3,0,1],
            [0,3,0,0,1],
            [3,3,3,1,3],
            [1,0,3,0,1],
            [1,1,0,3,3],
            [0,0,0,1,0],
            [3,3,0,0,1],
            [2,3,1,1,4],
            [5,2,3,1,4],
            [4,2,1,3,5],
            [2,4,1,[3,1],5],
            [3,1,5,2,,4],
            [1,2,4,5,3],
            [[4,6],[1,4,6],[1,2,4,5],[1,2,4],[2,5]],
            [[3,6],5,2,1,4],
            [[4,6],[3,5],2,[1,3],[7,8]]
        ];
        for ($i=0;$i < answers.length;$i++){
            var res = answers[$i].split('-')[0]-1;
            var ans = answers[$i].split('-')[1];
            for ($j=0;$j < table[res].length;$j++){
                if ($.isArray(table[res][$j])){
                    for($k=0;$k < table[res][$j].length;$k++){
                        if (table[res][$j][$k] == Number(ans)){
                            result[$j] += 1;
                        }
                    }
                }else{
                    if (table[res][$j] == Number(ans)){
                        result[$j] += 1;
                    }
                }

            }
//            result[$.inArray(Number(ans),table[res])] += 1;
        }
        console.log(result);
        $('.caption').html('<div class="col"><b>Ваши результаты:</b></div>')
        $('#main_div').html('<div class="row caption1"><div class="col-2">ИН</div><div class="col-2">'+result[0]+'</div></div><div class="row caption1"><div class="col-2">ПР</div><div class="col-2">'+result[1]+'</div></div><div class="row caption1"><div class="col-2">ПА</div><div class="col-2">'+result[2]+'</div></div><div class="row caption1"><div class="col-2">ХО</div><div class="col-2">'+result[3]+'</div></div><div class="row caption1"><div class="col-2">ЛЮ</div><div class="col-2">'+result[4]+'</div></div><div class="row"><div class="col d-grid gap-2"><a href="/"><button type="" class="btn btn-outline-primary">Пройти тест заново</button></a></div></div><h3 style="text-align: center;">Характеристика типов трудовой мотивации:</h3><p style="text-align: left;"><strong>1.&nbsp;&nbsp; Люмпенизированный тип.</strong></p><p style="text-align: left;">Относится к избегательному классу мотивации.</p><p style="text-align: left;"><em>Характеристика:</em></p><ul style="text-align: left;"><li>все равно, какую работу выполнять, нет предпочтений;</li><li>согласен на низкую оплату, при условии, чтобы другие не получали больше;</li><li>низкая квалификация;</li><li>не стремится повысить квалификацию, противодействует этому;</li><li>низкая активность и выступление против активности других;</li><li>низкая ответственность, стремление переложить ее на других;</li><li>стремление к минимизации усилий.</li></ul><p style="text-align: left;"><strong>2.&nbsp;&nbsp; Инструментальный тип.</strong></p><p style="text-align: left;">Относится к достижительному классу мотивации.</p><p style="text-align: left;"><em>Характеристика:</em></p><ul style="text-align: left;"><li>интересует цена труда, а не его содержание (то есть труд является инструментом для удовлетворения других потребностей, отсюда и название этого типа мотивации);</li><li>важна обоснованность цены, не желает «подачек»;</li><li>важна способность обеспечить свою жизнь самостоятельно.</li></ul><p style="text-align: left;"><strong>3.&nbsp;&nbsp; Профессиональный тип.</strong></p><p style="text-align: left;">Относится к достижительному классу мотивации.</p><p style="text-align: left;"><em>Характеристика:</em></p><ul style="text-align: left;"><li>интересует содержание работы;</li><li>не согласен на неинтересные для него работы сколько бы за них не платили.</li><li>интересуют трудные задания — возможность самовыражения;</li><li>считает важной свободу в оперативных действиях;</li><li>важно профессиональное признание, как лучшего в профессии.</li></ul><p style="text-align: left;"><strong>4.&nbsp;&nbsp; Патриотический тип.</strong></p><p style="text-align: left;">Относится к достижительному классу мотивации.</p><p style="text-align: left;"><em>Характеристика:</em></p><ul style="text-align: left;"><li>необходима идея, которая будет им двигать;</li><li>важно общественное признание участия в успехе;</li><li>главная награда — всеобщее признание незаменимости в фирме.</li></ul><p style="text-align: left;"><strong>5.&nbsp;&nbsp; Хозяйский тип.</strong></p><p style="text-align: left;">Относится к достижительному классу мотивации.</p><p style="text-align: left;"><em>Характеристика:</em></p><ul><li style="text-align: left;">добровольно принимает на себя ответственность;</li><li style="text-align: left;">характеризуется обостренным требованием свободы действий;</li><li style="text-align: left;">не терпит контроля.</li></ul></div>');
//        window.location.href = '/result';

    });
});