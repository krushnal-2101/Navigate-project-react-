import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Services = () => {
  const navigate = useNavigate()
  return (

    <Container>
      The Kia Sonet HTK is a mid-spec variant (approx. ₹8.4–9.9 Lakhs ex-showroom) available with 1.2L Petrol (5MT) or 1.5L Diesel (6MT), offering 16-inch wheels, 8-inch touchscreen, and 6 airbags standard. The lineup includes HTE, HTK, HTK(O), HTK+, HTX, GTX+, and X-Line, focusing on premium features like sunroofs, ventilated seats, and connected car technology in higher trims.
      Key Details of Kia Sonet HTK/HTK+ Variants
      Engine & Performance:
      1.2L Petrol (HTK): 1197 cc, 81.8 bhp, 115 Nm, 5-speed Manual.
      1.5L Diesel (HTK/HTK+): 1493 cc, 114 bhp, 250 Nm, 6-speed Manual.
      1.0L Turbo Petrol (HTK+): Available with iMT (manual without clutch).
      Key Features (HTK/HTK+):
      8-inch Touchscreen with Android Auto/Apple CarPlay.
      Wireless Android Auto/Apple CarPlay.
      Rear AC Vents & USB Type-C Chargers.
      Power adjustable ORVMs with LED turn signals.
      HTK+ Additional: Automatic AC, Projector Fog Lamps, Smart Key with Push Button Start.
      Safety (Standard): 6 Airbags, ESC (Electronic Stability Control), VSM (Vehicle Stability Management), Hill-Assist, and ABS.
      Kia Sonet All Model/Variant Lineup
      The Sonet range is structured with multiple engine/gearbox combinations:
      HTE / HTE(O): Base variant with essential features.
      HTK / HTK(O): Mid-range with infotainment and comfort features.
      HTK+ / HTK+(O): Adds automatic climate control and better styling.
      HTX / HTX+: Adds sunroof, LED headlamps, and better upholstery.
      GTX+ / X-Line: Top-end with ADAS, Bose sound system, and premium matte colors.
      <button onClick={() => navigate(-1)} className='bg-info m-4 p-3'>BACK</button>
    </Container>

  )
}

export default Services
