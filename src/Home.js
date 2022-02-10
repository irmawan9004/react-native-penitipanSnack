import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          namaWarung: 'warung Pak Anton',
          icon: 'store',
          color: '#5A74F8',
          jumlahBarang: 100,
          totalHarga: 100000,
        },
        {
          namaWarung: 'warung Pak Bejo',
          icon: 'store',
          color: '#5A74F8',
          jumlahBarang: 50,
          totalHarga: 50000,
        },
        {
          namaWarung: 'warung Bu Tuun',
          icon: 'store',
          color: '#5A74F8',
          jumlahBarang: 76,
          totalHarga: 76000,
        },
        {
          namaWarung: 'warung Bu Nanon',
          icon: 'store',
          color: '#5A74F8',
          jumlahBarang: 21,
          totalHarga: 21000,
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 15,
            elevation: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="store"
            size={28}
            color="#5A74F8"
            style={{marginLeft: 10}}
          />
          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>
              Iwan Snack
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#5A74F8',
                padding: 5,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                width: 30,
                elevation: 5,
                marginRight: 10,
              }}>
              <Icon name="plus" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatGrid
            itemDimension={130}
            data={this.state.data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  paddingVertical: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  elevation: 2,
                }}>
                <Icon
                  name={item.icon}
                  size={40}
                  color={item.color}
                  style={{marginBottom: 10}}
                />
                <Text style={{fontWeight: 'bold', marginBottom: 10}}>
                  {item.namaWarung}
                </Text>
                <Text>
                  Rp{' '}
                  {item.totalHarga
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  <Text style={{color: '#5A74F8', fontWeight: 'bold'}}>
                    {' '}
                    |{' '}
                  </Text>
                  {item.jumlahBarang} Pcs
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
