import {HashLink} from 'react-router-hash-link'
import {styled} from '@mui/system'



const StyledHashButton = styled(HashLink,{})({
    
    color: 'white',
    '&::visited' : {
        color:'white'
    },  
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    textDecoration: "none",
    fontSize:25    ,
    fontWeight:500    
});

const StyledLink = styled(HashLink,{})({
    
})

export {StyledHashButton,StyledLink }


