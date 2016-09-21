angular
  .module('hackerschoolApp')
  .constant('tamagotchiConstants', {
    zustaende: {
      normal: {
        images: ['001_start/PNG/tama.png']
      },
      essend: {
        images: ['004_eat/PNG/eat_1.png', '004_eat/PNG/eat_2.png', '004_eat/PNG/eat_3.png']
      },
      schlafend: {
        images: ['005_sleep/PNG/sleep_1.png', '005_sleep/PNG/sleep_2.png']
      },
      spielend: {
        images: ['006_play/PNG/play_1.png', '006_play/PNG/play_2.png']
      },
      hungrig: {
        images: ['007_hungry/PNG/hungry.png']
      },
      muede: {
        images: ['008_tired/PNG/tired.png']
      },
      langweilig: {
        images: ['009_bored/PNG/bored.png']
      }
    }
  });
