export interface Booking {
  id?: number;
  userId: number;
  screeningId: number;
  totalPrice: number;
  bookingDate?: string;
}

export interface BookingRequest {
  userId: number;
  screeningId: number;
  totalPrice: number;
}