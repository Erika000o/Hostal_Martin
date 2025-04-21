import ReservationForm from '../components/ReservationForm'
import Calendar from '../components/Calendar'

function Reservations() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Reservas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Calendar />
        <ReservationForm />
      </div>
    </div>
  )
}

export default Reservations