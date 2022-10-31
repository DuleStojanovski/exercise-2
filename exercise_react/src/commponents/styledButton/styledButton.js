const colors = [
  {
    name: 'default',
    backgroundColor: '#E7E7E7',
    color: '#000000',
  },
  {
    name: 'react',
    backgroundColor: '#61DBFB',
    color: '#FFFFFF',
  },
  {
    name: 'success',
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
  },
  {
    name: 'info',
    backgroundColor: '#2196F3',
    color: '#FFFFFF',
  },
  {
    name: 'warning',
    backgroundColor: '#FF9800',
    color: '#FFFFFF',
  },
  {
    name: 'danger',
    backgroundColor: '#F44336',
    color: '#FFFFFF',
  },
];
export const styledButton = {}
export const buttonStyles = ({
    backgroundColor: '#61DBFB',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
})
export const styledButton = (ButtonComponent) => {
  return(props) => {
      return <ButtonComponent {...props} style={buttonStyles}/>
  }
}

