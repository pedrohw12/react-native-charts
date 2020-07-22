import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryLine,
} from 'victory-native';

const App = () => {
  const [data, setData] = useState('month');
  let monthData = [
    {x: '', y: 0},
    {x: '', y: 0},
    {x: '', y: 17113},
    {x: 'Jan', y: 34227},
    {x: 'Fev', y: 51340},
    {x: 'Mar', y: 34227},
    {x: 'Abr', y: 30000},
    {x: 'Mai', y: 51340},
    {x: 'Jun', y: 55000},
    {x: 'Jul', y: 51340},
  ];

  let weekData = [
    {x: '01', y: 0},
    {x: '02', y: 0},
    {x: '03', y: 17113},
    {x: '04', y: 34227},
    {x: '05', y: 51340},
    {x: '06', y: 34227},
    {x: '07', y: 30000},
    {x: '08', y: 51340},
    {x: '09', y: 55000},
    {x: '10', y: 51340},
  ];

  var curr = new Date();
  var first = curr.getDate() - curr.getDay();
  var last = first + 6;

  var firstday = new Date(curr.setDate(first)).toUTCString();
  var lastday = new Date(curr.setDate(last)).toUTCString();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {data === 'week' ? (
        <Text>
          {' '}
          Week: {firstday.substring(5, 7)} - {lastday.substring(5, 7)}{' '}
        </Text>
      ) : (
        <Text> {data} </Text>
      )}
      <VictoryChart
        style={{
          background: {fill: '#0097e6'},
          parent: { fill: '#f22' }
        }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({datum}) => `${datum.x}, ${Math.round(datum.y, 2)}`}
          />
        }>
        <VictoryLine
          style={{
            data: {stroke: '#ddd'},
            parent: {border: '1px solid #0097e6'},
          }}
          data={data === 'month' ? monthData : weekData}
        />
      </VictoryChart>
      <TouchableOpacity
        onPress={() => setData('week')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0097e6',
          width: '80%',
          height: 40,
          marginBottom: 10,
          borderRadius: 4,
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setData('month')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0097e6',
          width: '80%',
          height: 40,
          borderRadius: 4,
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Month</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
