import React from 'react';

function Images(props){

    const Images = [
        {
            id:"1",
            image:'../../assets/images/Truck6.jpeg'
        },
        {
            id:"2",
            image:'../../assets/images/Truck5.jpeg'
        },
        {
            id:"3",
            image:'../../assets/images/Truck7.jpeg'
        },
        {
            id:"4",
            image:'../../assets/images/Truck4.jpeg'
        }
    ]








    return (
      <View >
        
         <View>
             <h1>Goeffrey Zed Trasporter's</h1></View>
            
           
           
               
               {Images.map(image=>(
                 <View key={Images.image}>
                 <Image style={styles.Img} source={ Images.image}  />
                
                <Link exact to="/Userrequest" ><Button type="submit" title="Hire Care"> </Button></Link>
                </View>
               ))}
              
               
               

           


          
<Link to="/" ><Button type="submit" title="Log Out"> </Button></Link>  
   


            <Footer/>
      </View>
    );
  }

export default Images;