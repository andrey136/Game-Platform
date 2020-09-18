import React, {Component} from 'react';
import '../../../../index.css';

class Description_Article extends Component {

    render() {
        return (
          <article>
              <h1>{JSON.parse(localStorage.getItem('user')) !== 'stranger' ? `Привет, ${JSON.parse(localStorage.getItem('user')).name}` : 'Description'}</h1>
              <h3>Hello my dear friend. Today I'm going to show you my first computer game and explain the rules of it.</h3>
              <p>
                  1. There are 4 levels.
                  <br/>
                  2. You choose one of the five cherries.
                  <br/>
                  3. After that you will be shown what exactly you have chosen. Was it shit or a banana?
                  <br/>
                  4. Then you will be offered a choice. You can take money and finish the game or continue it for a greater
                  gain.
                  <br/>
                  5. If you've got crap you can't go on playing.
                  <br/>
                  6. The greater level you have, the more crap is hidden beside the cherries.
                  <br/>
                  7. Your bet can't be lower 10$.
                  <br/>
                  8. All the money you won are stored.
                  <br/>
                  9. If you lost all your money, you won't be able to play this game anymore.
                  <br/>
                  Good luck!!!
              </p>
          </article>
        );
    }
}

export default Description_Article;
