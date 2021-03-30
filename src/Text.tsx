import React, { Component } from 'react';

type MyProps = {
  hidden: boolean,
  size: string,
}

class Text extends Component<MyProps> {
  render() {
    let size = this.props.size + 'em';
    return(
      <div id="textPreview" className={this.props.hidden ? 'text hidden' : 'text'}>
        <p id="lorem" style={{ fontSize: size }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias temporibus ex voluptates, quasi nesciunt maxime debitis. Molestias, in fugiat facilis asperiores ullam magnam laborum sequi cum magni ad repellendus velit non quisquam perferendis? Alias culpa velit dolorum dolore doloribus totam illo dolores maxime. Ut quia officiis at enim aliquam aut quibusdam commodi explicabo, nemo, accusantium nesciunt dolore laborum cum illum? Cumque iste rem nihil accusamus delectus, unde quasi cupiditate corporis autem reprehenderit ex libero temporibus fugit quas excepturi doloribus natus? Perspiciatis rerum suscipit quibusdam sunt fugit animi ducimus possimus. Ipsum eius nostrum porro cumque fuga, quibusdam accusamus earum saepe vel adipisci eum sed sunt doloremque voluptate amet quas! Perspiciatis ut quis dignissimos, ad exercitationem adipisci expedita. Amet quia asperiores atque magnam laboriosam excepturi, perspiciatis ad. Error, quos voluptatibus? Ducimus velit, molestias nesciunt necessitatibus laudantium quasi voluptatum, maiores architecto qui blanditiis dicta perferendis dolore magni, quod consectetur quae rem consequatur id.</p>
      </div>
    )
  }
}

export default Text;