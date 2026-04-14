export async function GET() {
    console.log("GET request received");
    const readTime = new Date(Date.now()).toLocaleString();
  return Response.json({
    message: "Users fetched successfully",
    data: [
      { id: 1, name: "Sandeep" },
      { id: 2, name: "John" },
    ],
    readTime,
  });
}
export async function POST(request: Request) {
  console.log("POST request received");

  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  const body = await request.json();
  const readTime = new Date(Date.now()).toLocaleString();
  return Response.json({
    message: "User created successfully",
    data: { ...body, userId },
    readTime,
  });
}