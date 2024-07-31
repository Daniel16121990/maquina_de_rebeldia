$(document).ready(function() {
    $('#calendar').fullCalendar({
        locale: 'es',
        events: [
            {
                title: 'Evento Reservado',
                start: '2023-12-16',
                url: './imagenes/16Dic2023.webp'
            },
            {
                title: 'Evento Reservado',
                start: '2024-02-10',
                url: './imagenes/10Feb2024.webp'
            },
            {
                title: 'Disponible para Contrataciones',
                start: '2024-08-15',
                end: '2024-09-30',
                color: 'green',
            },
            {
                title: 'No Disponible',
                start: '2024-08-01',
                end: '2024-08-15',
                color: 'red'
            }
            
        ],
        eventRender: function(event, element) {
            if (event.url) {
                element.find('.fc-title').append('<br/><img src="' + event.url + '" class="event-image"/>');
            }
        },
        eventClick: function(event) {
            if (event.url) {
                $.magnificPopup.open({
                    items: {
                        src: event.url
                    },
                    type: 'image'
                });
                return false; // prevent the browser from following the link
            }
        }
    });
});
