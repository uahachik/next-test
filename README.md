This test project was created with a great React framework by Server Side rendering - Next.js.

https://nextjs.org/learn/basics/getting-started

Zeit: "Think about how webapps are created with PHP. You create some files, write PHP code, then simply deploy it. We don't have to worry about routing much, and the app is rendered on the server by default."

Four pages are lay in the page folder.
The user authentication global state serves \_app.js with createContext React hook and is stored in the local memory.
I try to optimize performance by caching functions value by the (memoize-one library) useMemo React hook, (but I'm not sure to have success).

live demo: https://next-test.kotenkoroman2018.now.sh

<span>Credentials:</span>

<div style="margin-left:10px;color:blue">login: reactdev</div>
<div style="margin-left:10px;">password: 123456</div>
