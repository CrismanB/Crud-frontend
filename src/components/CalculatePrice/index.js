import React, { useEffect, useState } from "react";

import { Container, FieldContainer, ResultContainer } from "./styles";
import api from "./../../services/api";
import { formatPriceBR } from "./../../services/formatCurrency";

function CalculatePrice() {
  const [origins, setOrigins] = useState([]);
  const [destiny, setDestiny] = useState([]);
  const [plans, setPlans] = useState([]);

  const [planValue, setPlanValue] = useState("");
  const [originValue, setOrginValue] = useState("");
  const [destinyValue, setDestinyValue] = useState("");
  const [time, setTime] = useState(0);

  const [valueDefault, setValueDefault] = useState(0);
  const [valueWithPlan, setValueWithPlan] = useState(0);

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    api.get("plans").then((response) => {
      setPlans(response.data);

      const [{ name }] = response.data;
      setPlanValue(name);
    });
  }, []);

  useEffect(() => {
    api.get("prices").then((response) => {
      setOrigins(response.data);
      setDestiny(response.data);

      const [{ origin }] = response.data;
      const [{ destiny }] = response.data;

      setOrginValue(origin);
      setDestinyValue(destiny);
    });
  }, []);

  async function handleSimulate() {
    if (time < 0) {
      return;
    }

    try {
      const response = await api.post("simulator", {
        plan: planValue,
        origin: originValue,
        destiny: destinyValue,
        time,
      });

      setValueDefault(response.data.valueDefaultPlan);
      setValueWithPlan(response.data.valueWithPlan);
      setShowError(false);
    } catch (error) {
      setShowError(true);
      setValueDefault(0);
      setValueWithPlan(0);
      return;
    }
  }

  return (
    <Container>
      <FieldContainer>
        <div>
          <span>Código de origem</span>
          <select id="origem" onChange={(e) => setOrginValue(e.target.value)}>
            {origins.map((item) => (
              <option key={item.id} value={item.origin}>
                {item.origin}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span>Código de destino</span>
          <select id="origem" onChange={(e) => setDestinyValue(e.target.value)}>
            {destiny.map((item) => (
              <option key={item.id} value={item.destiny}>
                {item.destiny}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span>Tempo da ligação</span>
          <input
            name="tempo"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <span>Plano</span>
          <select id="plans" onChange={(e) => setPlanValue(e.target.value)}>
            {plans.map((plan) => (
              <option key={plan.id} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
      </FieldContainer>
      <ResultContainer>
        <button type="button" onClick={handleSimulate}>
          Simular
        </button>

        {showError ? (
          <span
            style={{
              fontSize: "20px",
              color: "#cf4066",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Parametros não encontrados
          </span>
        ) : null}
        <div>
          <span>Valor sem o plano</span>
          <strong>{formatPriceBR(valueDefault)}</strong>
        </div>

        <div>
          <span>Valor com o plano</span>
          <strong>{formatPriceBR(valueWithPlan)}</strong>
        </div>
      </ResultContainer>
    </Container>
  );
}

export default CalculatePrice;
