// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [inputCur, setInputCur] = useState('USD');
  const [outputCur, setOutputCur] = useState('EUR');
  const [output, setOutput] = useState('');
  const [err, setErr] = useState('');

  useEffect(
    function () {
      const contoller = new AbortController();

      async function proccessConversion() {
        try {
          setErr('');
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${inputCur}&to=${outputCur}`,
            { signal: contoller.signal }
          );

          const data = await res.json();

          if (data.message === 'not found')
            throw new Error('Mata uang input  tidak boleh sama dengan output!');

          if (data.message === 'invalid value for Float(): "NaN"')
            throw new Error('Isi dengan angka yang valid.');

          setOutput(data.rates[`${outputCur}`]);
        } catch (err) {
          if (err.name !== 'AbortError') setErr(err.message);
        }
      }

      if (input) proccessConversion();

      return function () {
        contoller.abort();
      };
    },
    [input, outputCur, inputCur]
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select value={inputCur} onChange={(e) => setInputCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={outputCur} onChange={(e) => setOutputCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT: {err ? err : output}</p>
    </div>
  );
}
