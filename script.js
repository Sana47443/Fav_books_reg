import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://wrxfbbsntekazevbujob.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyeGZiYnNudGVrYXpldmJ1am9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNTM2MTgsImV4cCI6MjA1NzcyOTYxOH0.Td8jFnKUR-Kqt1Oznm2qWrjWFIGWLcqD8r242EjlvM8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchBooks() {
    const { data, error } = await supabase.from('books').select('*');
    if (error) {
        console.error('Error fetching books:', error);
        return;
    }

    const tableBody = document.getElementById('booksTable');
    tableBody.innerHTML = '';

    data.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchBooks();
