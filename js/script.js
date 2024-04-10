$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: '<p class="section-title  fw-bold alert pt-0 pb-0 pe-3 ps-3 m-0">* Campo obrigatório</p>',
            email: '<p class="section-title  fw-bold alert pt-0 pb-0 pe-3 ps-3 m-0">* Campo obrigatório</p>',
            telefone: '<p class="section-title  fw-bold alert pt-0 pb-0 pe-3 ps-3 m-0">* Campo obrigatório</p>',
            mensagem: '<p class="section-title  fw-bold alert pt-0 pb-0 pe-3 ps-3 m-0">* Campo obrigatório</p>'
        }
    });

    $('.lista-estoque .btn').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h5').text();
        
        $('#veiculo-nome').val(nomeVeiculo);
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    });

    $('.lista-servico button').click(function() {
        const destino = $('#contato');
        const nomeServico = $(this).parent().find('h3').text();
        
        $('#servico-nome').val(nomeServico);
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    });
});