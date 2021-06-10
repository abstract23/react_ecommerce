import React from'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

// This one will need to be a class component, because we need to store the state value of
//those menu items that we wanna pass and create our menu items with

const Directory = ({sections}) =>  (
   <div className='directory-menu'>
      {
        sections.map(({ id, ...othersectionProps}) =>(
            <MenuItem key={id} {...othersectionProps} />
        ))
      }
    </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
    

export default connect(mapStateToProps)(Directory);