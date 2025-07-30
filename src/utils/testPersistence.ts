/**
 * Manual test script for localStorage persistence
 * Run this in the browser console to test the functionality
 */

// Test script for localStorage persistence
const testLocalStoragePersistence = () => {
  console.log('🧪 Starting localStorage persistence test...');
  
  // 1. Clear existing data
  localStorage.removeItem('bookings');
  console.log('✅ Step 1: Cleared existing bookings');
  
  // 2. Create test booking data
  const testBooking = {
    id: 'test-' + Date.now(),
    hospitalName: 'Test Hospital for Persistence',
    hospitalAddress: '123 Test Street, Test City, TS 12345',
    hospitalType: 'General Hospital',
    rating: 4.8,
    selectedDate: {
      dayLabel: 'Today',
      dateLabel: '30 Jul',
      fullDate: new Date(),
      slotsAvailable: 10
    },
    selectedTimeSlot: '10:00 AM',
    bookingDate: new Date().toISOString(),
    status: 'confirmed',
  };
  
  // 3. Save to localStorage
  const bookings = [testBooking];
  localStorage.setItem('bookings', JSON.stringify(bookings));
  console.log('✅ Step 2: Saved test booking to localStorage:', testBooking);
  
  // 4. Verify data was saved
  const savedData = localStorage.getItem('bookings');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    console.log('✅ Step 3: Data successfully retrieved from localStorage:', parsedData);
    
    // 5. Verify data structure
    if (Array.isArray(parsedData) && parsedData.length === 1) {
      const booking = parsedData[0];
      if (booking.hospitalName === 'Test Hospital for Persistence') {
        console.log('✅ Step 4: Data structure is correct');
        
        // 6. Dispatch event to trigger component update
        window.dispatchEvent(new CustomEvent('bookingUpdated'));
        console.log('✅ Step 5: Dispatched bookingUpdated event');
        
        // 7. Test page reload persistence
        console.log('🔄 Test complete! The booking should now appear in the My Bookings page.');
        console.log('📝 To test persistence after page reload:');
        console.log('   1. Navigate to My Bookings page');
        console.log('   2. Verify the test booking appears');
        console.log('   3. Reload the page');
        console.log('   4. Verify the booking still appears after reload');
        
        return true;
      }
    }
  }
  
  console.error('❌ Test failed: Data was not saved or retrieved correctly');
  return false;
};

// Export for use in tests or run immediately
if (typeof window !== 'undefined') {
  (window as any).testLocalStoragePersistence = testLocalStoragePersistence;
  console.log('🔧 Test function added to window.testLocalStoragePersistence()');
  console.log('🏃‍♂️ Run window.testLocalStoragePersistence() to test localStorage persistence');
}

export { testLocalStoragePersistence };
