export const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

export const openRazorpayCheckout = async ({
  amount,
  planName,
  onSuccess
}: {
  amount: number,
  planName: string,
  onSuccess: (res: any) => void
}) => {
  const res = await loadRazorpay()
  if (!res) {
    alert('Razorpay SDK failed to load. Are you online?')
    return
  }

  // In a real app, you would call your backend here:
  // const order = await fetch('/api/create-order', { ... })
  // For this frontend demo, we will use a dummy order ID
  const dummyOrderId = 'order_' + Math.random().toString(36).substring(7)

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_dummykey123456',
    amount: amount * 100, // amount in paise
    currency: 'INR',
    name: 'AgenticShift',
    description: `Bootcamp 2.0 — ${planName}`,
    order_id: dummyOrderId,
    handler: function (response: any) {
      // In a real app, verify with backend:
      // await fetch('/api/verify-payment', { body: JSON.stringify(response) })
      console.log('Payment successful', response)
      onSuccess(response)
    },
    prefill: {
      name: localStorage.getItem('as_name') || '',
      email: '',
      contact: ''
    },
    theme: {
      color: '#ffffff',
      backdrop_color: '#080808'
    }
  }

  // @ts-ignore
  const rzp = new window.Razorpay(options)
  rzp.open()
}
