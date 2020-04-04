import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
   state = {
      // What state does this component have?
      filter: ''
   };

   updateSearchTerm = searchTerm => {

   };

   render() {
      // console.log(this.props);


      const { title, items, onToggle, onRemove, onUpdate } = this.props;
      return (
         <section className="Items">
            <h2>
               {title} ({items.length})
        </h2>
            <Filter searchTerm={''} onChange={this.updateSearchTerm} />
            {items.filter(item =>
               // Hmm… this needs some work.
               item.value.toLowerCase().includes(''.toLowerCase()),
            )
               .map(item => (
                  <Item
                     key={item.id}
                     onToggle={onToggle}
                     onRemove={onRemove}
                     onUpdate={onUpdate}
                     item={item}
                  />
               ))}
         </section>
      );
   }
}

export default Items;
