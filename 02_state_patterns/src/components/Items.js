import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
   state = {
      searchTerm: ''
   };

   shouldComponentUpdate(prevProps, prevState) {
      return prevState.searchTerm !== this.state.searchTerm ||
         prevProps.items.length !== this.props.items.length
   }

   updateSearchTerm = searchTerm => {
      this.setState({ searchTerm })
   };

   clearSearch = () => {
      this.setState({ searchTerm: '' })
   }

   render() {
      const { title, items, onToggle, onRemove, onUpdate } = this.props
      const { searchTerm } = this.state
      // console.log("********* ITEMS LIST: ", title);
      return (
         <section className="Items">
            <h2> {title} ({items.length}) </h2>
            {items.length > 0 &&
               <Filter
                  title={title}
                  searchTerm={searchTerm}
                  onClear={this.clearSearch}
                  onChange={this.updateSearchTerm}
               />
            }
            <ul>
               {items.filter(item => item.value.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map(item => <Item key={item.id} item={item} />)
               }
            </ul>
         </section>
      );
   }
}

export default Items;
