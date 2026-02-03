import { useNavigate, useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

function BookingDetails() {
  const { id } = useParams();

  const navigate = useNavigate()

  const carDetails = {
    htk: {
      title: "Kia Sonet HTK",
      description:
        "Eco, Normal, and Sport drive modes offer balanced performance. Ideal for city driving with fuel efficiency The Kia Sonet HTK is a mid-variant (above HTE) in the Sonet lineup, enhancing the base model with features like 16-inch styled wheels, an 8-inch touchscreen with wireless Apple CarPlay/Android Auto, and a rearview camera. It is powered by a 1.2L petrol engine (82 bhp) or a 1.0L Turbo petrol engine (118 bhp). "
    },
    "htk-o": {
      title: "Kia Sonet HTK(O)",
      description:
        "Adds extra comfort and traction modes (Snow, Mud, Sand) for better handling in varied terrains.Kia Sonet HTK (O) | Sonet HTK (O) Price, Specs, Images, ColoursThe Kia Sonet HTK (O) is a feature-packed mid-variant SUV (priced around ₹10-13 Lakh) available in 1.2L petrol (5MT, 82 bhp) or 1.5L diesel (6MT, 114 bhp). Key features include a sunroof, 8-inch touchscreen with wireless Apple CarPlay/Android Auto, automatic climate control, LED DRLs, and 6 airbags standard. "
    },
    "htk-plus": {
      title: "Kia Sonet HTK Plus",
      description:
        "Premium variant with Smart Mode, iMT transmission, and advanced performance management.The 2025 Kia Sonet HTK Plus is a mid-spec variant offering 1.2L petrol, 1.0L turbo petrol, and 1.5L diesel engine options. Key features include an 8-inch touchscreen with wireless Android Auto/Apple CarPlay, automatic climate control, electric sunroof, projector fog lamps, and 16-inch alloy wheels"
    }
  };

  const car = carDetails[id];

  if (!car) {
    return (
      <Container className="mt-5">
        <h3>Invalid Booking Selection</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5" >
      <Card style={{ width: "24rem" , backgroundColor:"gray" }}>
        <Card.Body>
          <Card.Title>{car.title}</Card.Title>
          <Card.Text>{car.description}</Card.Text>
        </Card.Body>
      </Card>
      <button onClick={() => navigate(-1)} className='bg-info m-3 p-2'>BACK</button>
    </Container>
  );
}

export default BookingDetails;
