import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = 'https://wrxfbbsntekazevbujob.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyeGZiYnNudGVrYXpldmJ1am9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNTM2MTgsImV4cCI6MjA1NzcyOTYxOH0.Td8jFnKUR-Kqt1Oznm2qWrjWFIGWLcqD8r242EjlvM8'

const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchBooks() {
    let { data: books, error } = await supabase.from("books").select('*');

    console.log("Fetched Data:", books);
    console.log("Fetch Error:", error);

    if (error) {
        alert("Error fetching books! Check console for details.");
        return;
    }

    let booklist = document.getElementById("books");
    booklist.innerHTML = ""; 

    books.forEach(book => {
        let row = document.createElement("tr"); 

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        `;

        booklist.appendChild(row);
    });
}

fetchBooks();
