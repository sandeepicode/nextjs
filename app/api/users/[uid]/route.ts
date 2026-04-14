export async function GET(request: Request, { params }: { params: Promise<{ uid: string }> }) {

  const { uid } = await params;

  console.log("\n\n =>> GET request received for user:", uid);



  const readTime = new Date(Date.now()).toLocaleString();
  return Response.json({
    message: "User fetched successfully",
    data: {
      id: uid,
      name: "Sandeep",
    },
    readTime,
  });
}
