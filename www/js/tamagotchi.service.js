angular
  .module('hackerschoolApp')
  .service('tamagotchiService', function($interval, $timeout, tamagotchiConstants) {

    this.zustand = 'normal';
    this.hungrig = 0;
    this.muede = 0;
    this.langweilig = 0;

    this.imageIndex = 0;

    this.zustandAendern = zustand => {
      if (zustand === this.zustand) {
        if (tamagotchiConstants.zustaende[zustand].dann) {
          this.zustand = tamagotchiConstants.zustaende[zustand].dann;
        } else {
          this.zustand = 'normal';
        }
      } else {
        this.zustand = zustand;
      }
    };


    this.start = () => {

      // wird müde
      $interval(() => {
        if ('normal' === this.zustand) {
          this.muede++;
        }

        if (this.muede > 10 && ('normal' === this.zustand)) {
          this.muede = 10;
          this.zustand = 'muede';
        }
      }, 1000);

      // schläft
      $interval(() => {
        if ('schlafend' === this.zustand) {
          this.muede = Math.max(0, this.muede - 2);
        }
      }, 500);


      // wird hungrig
      $interval(() => {
        if ('normal' === this.zustand) {
          this.hungrig++;
        }

        if (this.hungrig > 10 && ('normal' === this.zustand)) {
          this.hungrig = 10;
          this.zustand = 'hungrig';
        }
      }, 1000);

      // isst
      $interval(() => {
        if ('essend' === this.zustand) {
          this.hungrig = Math.max(0, this.muede - 2);
        }
      }, 500);


      // wird gelangweilt
      $interval(() => {
        if ('normal' === this.zustand) {
          this.langweilig++;
        }

        if (this.langweilig > 10 && ('normal' === this.zustand)) {
          this.langweilig = 10;
          this.zustand = 'langweilig';
        }
      }, 1000);

      // spielt
      $interval(() => {
        if ('spielend' === this.zustand) {
          this.langweilig = Math.max(0, this.muede - 2);
        }
      }, 500);

    };


    $interval(() => {

      this.imageIndex++;

      if (this.imageIndex > tamagotchiConstants.zustaende[this.zustand].images.length -1) {
        this.imageIndex = 0;
      }

      this.image = tamagotchiConstants.zustaende[this.zustand].images[this.imageIndex];

    }, 300);

    return this;
  });
