// Simulated asynchronous function that returns a promise after a delay
function simulateAsyncAPI(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Processed: ${data}`);
      }, 1000);
    });
  }
  
  // Asynchronous function using async/await
  async function processData() {
    try {
      console.log("Start processing...");
      const result1 = await simulateAsyncAPI(1);
      console.log(result1);
      
      const result2 = await simulateAsyncAPI(2);
      console.log(result2);
  
      const result3 = await simulateAsyncAPI(3);
      console.log(result3);
      
      console.log("Processing completed!");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call the async function
  processData();
  