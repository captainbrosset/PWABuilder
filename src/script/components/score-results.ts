import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('score-results')
export class ScoreResults extends LitElement {
  @property() maniTestResults: any | undefined;

  static get styles() {
    return css`
      h4 {
        font-size: 22px;
      }

      #score-grid {
        display: grid;
        grid-template-columns: auto auto;
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    console.log('maniTestResults', this.maniTestResults);
  }

  render() {
    return html`
      <div>
        <div id="mani-scorecard-header">
          <h4>Summary</h4>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. ven further!
          </p>
        </div>

        <div id="score-grid">
          <div id="required">
            <h5>Required</h5>

            <ul>
              ${
                this.maniTestResults && this.maniTestResults.length > 0 ? 
                  this.maniTestResults.map((result) => {
                    return html`
                      <li>${result}</li>
                    `
                  })
                 : null
              }
            </ul>
          </div>
          <div id="recommended">
            <h5>Recommended</h5>
          </div>
          <div id="optional">
             <h5>Optional</h5>
          </div>
        </div>
      </div>
    `;
  }
}
