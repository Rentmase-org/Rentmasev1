
import { useEffect, useState } from "react";
import PhoneNumberForm from "./PhoneNumberPhone";
import Operators from "./Operators";
import { CountryData } from "./types";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../../hooks/requests";
import { topus_audience } from "../../constants";




const Airtime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => { await getAccessToken(topus_audience); })();
  }, [dispatch]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [component, setComponent] = useState("phone-number");
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

  return (
    <>
      {component === "phone-number" && <PhoneNumberForm {...{ setComponent, selectedCountry, setPhoneNumber, phoneNumber, setSelectedCountry }} />}
      {component === "operator" && <Operators {...{ phoneNumber, selectedCountry, setComponent }} />}
    </>
  );
};

export default Airtime

