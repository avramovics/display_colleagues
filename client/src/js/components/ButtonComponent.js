import React from 'react';
export function Button(props) {
    return <button 
                onClick={props.onClickEvent} 
                className={props.type}>
                    {props.text}
            </button>;
  }

