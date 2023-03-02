import { showCartActions } from "./showCart";
import { cartOrderActions } from "./cartOrder"; 

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch("https://react-learn-http-post-default-rtdb.europe-west1.firebasedatabase.app/cart.json")
            
            if (!response.ok) {
                throw new Error ('Could not fetch cart data!')
            }

            const data = await response.json()
            return data
        }
        try{
            const cartData = await fetchData()

            if (!cartData) {
                return
            }

            dispatch(cartOrderActions.replaceCart({
                cartOrder: cartData.cartOrder || [],
                together: cartData.together
            }))

        } catch (err) {
            dispatch(
                showCartActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching cart data failed!",
                })
              );
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        showCartActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
  
      const sendRequest = async () => {
          const response = await fetch(
              "https://react-learn-http-post-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
              {
                method: "PUT",
                body: JSON.stringify({cartOrder: cart.cartOrder, together: cart.together}),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
        
            if (!response.ok) {
              throw new Error("Didn`t upload data=(");
            }
      }
      try{
          await sendRequest()
          
          dispatch(
              showCartActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Sent cart data successfully!",
              })
            );
      } catch (err){
          dispatch(
              showCartActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending data failed!",
              })
            );
      }
    };
};