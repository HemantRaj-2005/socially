
async function page() {

    const response = await fetch('http://localhost:3000/api/tasks',{
        cache:"no-store",
    })
    const tasks = await response.json();

    console.log("task:" ,tasks);


  return (
    <div>Task page</div>
  )
}

export default page