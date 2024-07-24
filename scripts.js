

      var sound = new Howl({
        src: ["audio/Perfect.mp3"],
        volume: 0.5,
      });

      var seekBar = document.getElementById("seekBar");
      var timeDisplay = document.getElementById("timeDisplay");
      var isSeeking = false;

      sound.on("play", function () {
        seekBar.max = sound.duration();
        requestAnimationFrame(updateSeekBar);
        
      });

      sound.on("end", function () {
        seekBar.value = 0;
        timeDisplay.textContent = "0:00 / 0:00";
      });

      $("#playPauseButton").on("click", function () {
        if (sound.playing()) {
          sound.pause();
        } else {
            if (sound.playing() && !isSeeking) {
                seekBar.value = sound.seek();
                updateTimeDisplay();
                requestAnimationFrame(updateSeekBar);
              }
          sound.play();if (sound.playing() && !isSeeking) {
            seekBar.value = sound.seek();
            updateTimeDisplay();
            requestAnimationFrame(updateSeekBar);
          }

        }
      });

      $("#backwardButton").on("click", function () {
        var currentTime = sound.seek();
        sound.seek(currentTime - 5);
        updateTimeDisplay();
      });

      $("#forwardButton").on("click", function () {
        var currentTime = sound.seek();
        sound.seek(currentTime + 5);
        if (sound.playing() && !isSeeking) {
            seekBar.value = sound.seek();
            updateTimeDisplay();
            requestAnimationFrame(updateSeekBar);
          }
      });

      seekBar.addEventListener("input", function () {
        var seekValue = parseFloat(seekBar.value);
        sound.seek(seekValue);
        updateTimeDisplay();
      });

      seekBar.addEventListener("mousedown", function () {
        isSeeking = true;
      });

      seekBar.addEventListener("mouseup", function () {
        isSeeking = false;
        seekBar.max = sound.duration();
        requestAnimationFrame(updateSeekBar);
      });

      function updateSeekBar() {
        if (sound.playing() && !isSeeking) {
          seekBar.value = sound.seek();
          updateTimeDisplay();
          requestAnimationFrame(updateSeekBar);
        }
      }

      function updateTimeDisplay() {
        var currentTime = formatTime(Math.round(sound.seek()));
        var duration = formatTime(Math.round(sound.duration()));
        timeDisplay.textContent = currentTime + " / " + duration;
      }

      function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        return (
          minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds
        );
      }

      // Muestra/oculta el menú flotante al hacer clic en el botón
      $("#floatingMenuButton").on("click", function () {
        $("#floatingMenu").toggle();
      });
      $("#floatingMenu ul li").on("click", function () {
        var songId = $(this).data("id");
        loadSongData(songId);
      });

      $(document).on("click", function (event) {
        var $floatingMenu = $("#floatingMenu");
        var $button = $("#floatingMenuButton");

        // Verifica si el clic no ocurrió dentro del menú o en el botón
        if (
          !(
            $floatingMenu.is(event.target) ||
            $floatingMenu.has(event.target).length ||
            $button.is(event.target)
          )
        ) {
          $floatingMenu.hide();
        }
      });

      function loadSongData(songId) {
        // Implementa lógica para cargar la letra y el audio según el ID de la canción
        // Por ejemplo, puedes usar un objeto que contenga información de las canciones

        var songData = {
          song1: {
            name: "Eskorbuto - Ha llegado el momento",
            audioSrc: "audio/Perfect.mp3",
            lyrics: `
---------melodia (2)----------

oaeo (2)

Puede ser el americano,
o quizás el japonés
Puede ser el ruso,
o el español tal vez

Ha llegado el momento, de la destrucción

--------Melodia (1)--------

Oaeo (2)

Pueden ser los chinos
y los ingleses también
Pueden ser los negros,
vete tu a saber

Ha llegado el momento, de la destrucción

---------Melodia (4)--------

Puede ser cualquiera,
cualquiera puede ser
Pueden ser ellos,
ellos también

Ha llegado el momento, de la destrucción







--------------------------------------------
            `,
          },
          song2: {
            name: "Non Servium - El espiritu del Oi",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
-------Melodia (2)(2) hoy (2)------

Pasan los años y no puedes negar
Que todo cambie tu mentalidad
Ritmo de vida y forma de pensar
Cosas distintas que no puedes mezclar

Tu cara muestra tu desolación
Y tu mirada me transmite dolor
No eres el mismo que fuiste ayer
Te han cortado las alas

Abre la puerta escapate
Seguimos en la brecha
Cagate en dios bebete tres
Hazte otra vez la cresta
Romperemos los esquemas
De esta puta sociedad
Es el espiritu del oi!
Con nosotros no podrán

-------- melodía(2)-------

Pero ahora tienes una vida mejor
Puedes comprarte un televisor
Salir por ahí sin que te miren mal
Porque eres uno de ellos

Este es el precio que hay que pagar
Para integrarse en su sociedad
Yo me pregunto dónde está
Dónde está tu felicidad

Abre la puerta escapate
Seguimos en la brecha
Cagate en dios bebete tres
Hazte otra vez la cresta
Romperemos los esquemas
De esta puta sociedad
Es el espiritu del oi!
Con nosotros no podrán

Melodía (2) intro
Melodia (2) intro2
Melodía (2) riff
Melodia (2) mosh

Abre la puerta escapate
Seguimos en la brecha
Cagate en dios bebete tres
Hazte otra vez la cresta
Romperemos los esquemas
De esta puta sociedad
Es el espiritu del oi!
Con nosotros no podrán

Abre la puerta escapate
Seguimos en la brecha
Cagate en dios bebete tres
Hazte otra vez la cresta
Romperemos los esquemas
De esta puta sociedad
Es el espiritu del oi!
Con nosotros no podrán


















-------------------------------------------
            `,
          },

          song3: {
            name: "Non Servium - Nuestra lucha",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
Ten muy claro que no cuentas conmigo
Debes saber que eres mi enemigo
Con nosotros no eres bienvenido
Ve con ellos, necesitan amigos

Elegiste el camino mas fácil
La postura del sucio cobarde
Un camino que no respetamos
Para nosotros solo existen dos lados

LO QUE NO VAMOS A DEJAR
QUE DESPRECIEIS NUESTRA LUCHA NOOOOOOO
Que os riais de nuestros muertos
Desprecieis a nuestros presos

LO QUE NO VAMOS A PERMITIR
QUE DESPRECIEIS NUESTRA LUCHA NOOOOOOO
Que os riais de nuestros muertos
Desprecieis a nuestros presos

Hace tiempo que juegas a dos bandas
Hace tiempo que no respetas nada
Hace tiempo que eres un payaso
Todo esto tienes que pagarlo

Eres una burla a nuestra lucha
Solo eres escoria como ellos
Se acabaron las contemplaciones
Se acabó atender a razones

LO QUE NO VAMOS A DEJAR
QUE DESPRECIEIS NUESTRA LUCHA NOOOOOOO
Que os rias de nuestros muertos
Desprecieis a nuestros presos

LO QUE NO VAMOS A PERMITIR
QUE DESPRECIEIS NUESTRA LUCHA NOOOOOOO!!
Que os riais de nuestros muertos
Desprecieis a nuestros presos

Eres una plaga, una enfermedad
Que hay erradicar como la puta peste
No tienes sentido de la lealtad
Solo estar agusto y desaparecer

Tragarás, chuparás y te arrastrarás
Como una serpiente es el que más calienta
Llegará el momento en que te quemarás
Ese es el precio de tentar a la suerte

Ahora es tiempo de reacción
Demostrarles que este es nuestro
puto infierno
Que no hay lugar para la ambigüedad
Que este es su final

Odio eterno a la complicidad
Del ambiguo y su juego tan ruín
Acostumbrados a no retroceder
Que creeis que sereis la excepción
NOOOOOO

Odio eterno a la complicidad
Del ambiguo y su juego tan ruín
Tan ruín
Acostumbrados a no retroceder
Que creeis que sereis la excepción
NOOOOOO












----------------------------------------
`,
          },

          song4: {
            name: "El último ke Zierre - Olor a muerte",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
Te has mirado
al espejo
con complejo,
¿que es lo que han hecho de ti?.

La justicia
no te sirve,
condenado
inocente,

y te sientas en un rincón,
abatido por tu depresión,
ellos te llaman, tu no escuchas,

ya no tienes a quien respetar,
ya no tienes a quien querer,
Solo mentiras, solo mentirás

olor a muerte... (2)

Riff (2)
Riff2 (2)

Olor muerte....
Intro (2)








--------------------------
`,
          },
          song5: {
            name: "Eskorbuto - Historia triste",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
Pasan los años
Pasa tu vida
Pasan los meses
Pasan tus días
Pasan las horas
También tus minutos
¡Este puede ser tu último segundo!

Uooh, historia triste
Uooh, historia historica
Uooh, historia final

Una mañana
Muy temprano
De tus sueños despertarás
No lo sabrás
Este es tu dia
¡Vas a morir!

Uooh, historia triste
Uooh, historia historica
Uooh, historia final

Uooh, historia triste
Uooh, historia historica
Uooh, historia final

Uooh
Uooh
Uooh
Uooh
Uooh
Uooh
Uooh
Uooh
Uooh
¡Historia final!















----------------------------
`,
          },
          song6: {
            name: "Eskorbuto - Os engañan",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
Anuncios publicitarios
Que prometen felicidad
De algún producto de moda
Que te hará cambiar

Comprador que entra en la tienda
Al acecho el vendedor
Vendedor que vende producto
Comprador que se vaya a mamar

Ohh, si, si, os engañan, os engañan así
Ohh, si, si, os engañan, os engañan así
Ohh, si, si, os engañan, os engañan así

Mi vieja me despertó
En la cama estaba yo
Han cambiado la hora
Lo dijo anoche televisión

Oh, si, si, os engañan, os engañan así
Oh, si, si, os engañan, os engañan así
Oh, si, si, os engañan, os engañan así











-----------------------
`,
          },
          song7: {
            name: "Nalgas - Con dinero baila el perro",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
Mi país se hunde, nadie hace nada
La gente se divide, ¡qué pendejada!
Desde Aragón hasta Ayotzinapa
(Con dinero baila el perro,
nadie se escapa)


Bienvenido al lugar
donde te quieren callar
Si no dices lo que esperan
los que mueven el plan
Si no tranza, no avanza,
otro pasado de lanza
Por andar de muertos de hambre,
perdieron la balanza

¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!

Ya me cansé, ya me cansé,
se me cansó el caballo
Nos mienten en la tele,
también en la radio
Cuerpos quemados,
fosas en trincheras
¿Qué pasó, mi chingón,
empezaste una guerra?

No es tan cagado mirar
como nos quieren chorear
Da lo mismo presidente
o policía auxiliar
Entre tanta basura,
secuestro o tortura
Los medios se rindieron,
les pasamos factura

¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!
¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!

Aquí no hay terrorismo,
aquí no hay vandalismo
Solo estamos hartos
de vivir siempre lo mismo
Tanta violencia, mucha pobreza
Ya nos cansamos de la delincuencia
Devaluación, más corrupción
¡Cuánta impotencia, qué desesperación!
No hay acarreados, no los van a parar
Aunque se esfuerzen no la van a librar

¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!
¡No, no nos van a parar!
¡Porque los perros solo saben ladrar!
























-------------------------------------------------------------------
`,
          },
          song8: {
            name: "Máquina de rebeldía - Injusticia",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
La gente habla, la gente grita
Pero nadie hace nada
Estamos cansados, estamos artos
De ser ignorados

El poder corrupto nos controla
Nos manipula y nos oprime
Pero nosotros no estamos solos
Juntos podemos hacer un cambio

***Melodía4**

Nos alzamos y nos revelamos
Contra el sistema y sus problemas
Nuestra lucha es fuerte
No permitiremos mas injusticia

Nos uniremos y pelearemos
Hasta que todos sean libres
Nuestra lucha es justa
Nada nos detendrá

***Hey! (6)

Nos uniremos y pelearemos
Hasta que todos sean libres
Nuestra lucha es justa
Nada nos detendrá

Nos alzamos y nos revelamos
Contra el sistema y sus problemas
Nuestra voz es fuerte
No permitiremos mas injusticia (bis2)









------------------------
`,
          },
          song9: {
            name: "Máquina de rebeldía - Sistema corrupto",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
La vida es un juego de azar
Donde siempre pierde el mismo
El de abajo siempre pagará
Y el de arriba será el rico

(Coro)
Es el sistema corrupto
Que nos deja sin futuro
Es el sistema injusto
Que nos quita todo, todo, todo

Trabajamos para sobrevivir
Mientras ellos viven de nosotros
La riqueza se concentra en el fin
Mientras nosotros vivimos en lodo

(Coro)
Es el sistema corrupto
Que nos deja sin futuro
Es el sistema injusto
Que nos quita todo, todo

Solo de guitarra

(Coro)
Es el sistema corrupto
Que nos deja sin futuro
Es el sistema injusto
Que nos quita todo, todo



















--------------------------
`,
          },
          song10: {
            name: "Máquina de rebeldía - Caos",
            audioSrc: "audio/044 Camila - Lágrimas.mp3",
            lyrics: `
Caos, caos, en mi ciudad,
Gritando muy fuerte, revolución!
Caos, caos, en mi ser,
Revolución ardiente, sin temer.

Caos, caos, en las calles,
Gritos de cambio, sin temor.
Caos, caos, en mi ser,
Protesta constante, sin ceder.








...................
`,
          },
          // Agrega más información de las canciones según sea necesario
        };

        // Cargar la letra y el audio de la canción seleccionada
        var selectedSong = songData[songId];
        sound.unload(); // Detener la reproducción de la canción actual
        sound = new Howl({
          src: [selectedSong.audioSrc],
          volume: 0.5,
        });
        $("#timeDisplay").text("0:00 / 0:00"); // Restablecer la información de tiempo
        updateSeekBar(); // Actualizar la barra de búsqueda

        // Mostrar la letra de la canción
        $(".lyrics pre").text(selectedSong.lyrics);

        // Actualizar el título con el nombre de la canción
        $("header h1").text(selectedSong.name);
      }