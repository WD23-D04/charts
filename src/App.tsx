import ChartComponent from './components/ChartComponent';

function App() {
  const chartData = {
    labels: [
      'Getreideprodukte',
      'Gemüse',
      'Obst',
      'Fleisch und Geflügel',
      'Fisch und Meeresfrüchte',
      'Milchprodukte',
      'Eier',
      'Hülsenfrüchte',
      'Nüsse und Samen',
      'Öle und Fette',
      'Süßigkeiten',
      'Getränke',
    ],
    datasets: [
      {
        label: 'Lagger',
        data: [86, 145, 293, 42, 189, 337, 127, 321, 66, 272, 248, 75],
        borderWidth: 1,
        backgroundColor: ['purple', 'orange', 'crimson', 'darkgreen', 'silver'],
      },
      {
        label: 'Preise',
        data: [10, 20, 10, 30, 12, 17, 32, 28, 95, 125, 50, 70],
        borderWidth: 1,
        backgroundColor: ['purple', 'orange', 'crimson', 'darkgreen', 'silver'],
      },
    ],
  };

  return (
    <div>
      <ChartComponent data={chartData} />{' '}
    </div>
  );
}

export default App;
