// public/script.js

// Function to fetch all reservations and display them
function fetchReservations() {
    $.ajax({
        url: "http://localhost:6090/reservations",
        type: "GET",
        success: function (data) {
            let reservations = data.data;
            let rows = '';
            reservations.forEach(reservation => {
                rows += `
                    <tr>
                        <td>${reservation.id}</td>
                        <td>${reservation.guestName}</td>
                        <td>${reservation.roomNumber}</td>
                        <td>${reservation.checkInDate}</td>
                        <td>${reservation.checkOutDate}</td>
                    </tr>
                `;
            });
            $('#reservationsTable tbody').html(rows);
        },
        error: function (error) {
            alert("Error fetching reservations");
        }
    });
}

// Create a new reservation
$('#createReservationForm').submit(function (e) {
    e.preventDefault();

    const data = {
        guestName: $('#guestName').val(),
        roomNumber: $('#roomNumber').val(),
        checkInDate: $('#checkInDate').val(),
        checkOutDate: $('#checkOutDate').val()
    };

    $.ajax({
        url: "http://localhost:6090/reservations",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function () {
            alert('Reservation created successfully');
            fetchReservations(); // Refresh the table
        },
        error: function () {
            alert('Error creating reservation');
        }
    });
});

// Update a reservation
$('#updateReservationForm').submit(function (e) {
    e.preventDefault();

    const id = $('#updateId').val();
    const data = {
        guestName: $('#updateGuestName').val(),
        roomNumber: $('#updateRoomNumber').val(),
        checkInDate: $('#updateCheckInDate').val(),
        checkOutDate: $('#updateCheckOutDate').val()
    };

    $.ajax({
        url: `http://localhost:6090/reservations/update/${id}`,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function () {
            alert('Reservation updated successfully');
            fetchReservations(); // Refresh the table
        },
        error: function () {
            alert('Error updating reservation');
        }
    });
});

// Delete a reservation
$('#deleteReservationForm').submit(function (e) {
    e.preventDefault();

    const id = $('#deleteId').val();

    $.ajax({
        url: `http://localhost:6090/reservations/delete/${id}`,
        type: "POST",
        success: function () {
            alert('Reservation deleted successfully');
            fetchReservations(); // Refresh the table
        },
        error: function () {
            alert('Error deleting reservation');
        }
    });
});

// Fetch and display reservations when the page loads
$(document).ready(function () {
    fetchReservations();
});
