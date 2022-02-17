import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';
import Modal from 'react-native-modal';

export default class Warung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSnack: [
        {nama: 'Snack Jagung', qty: 20, hargaSatuan: 1000},
        {nama: 'Snack kentang', qty: 30, hargaSatuan: 3000},
        {nama: 'Snack Pasir', qty: 14, hargaSatuan: 1500},
        {nama: 'Snack Usus', qty: 30, hargaSatuan: 3000},
        {nama: 'Snack Manis', qty: 20, hargaSatuan: 2000},
        {nama: 'Snack Ayam', qty: 40, hargaSatuan: 4000},
      ],
      total: 0,
    };
  }
  componentDidMount() {
    let total = this.state.total;
    let dataSnack = this.state.dataSnack;

    for (let i = 0; i < dataSnack.length; i++) {
      total += dataSnack[i].qty * dataSnack[i].hargaSatuan;
    }
    this.setState({total});
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
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Waroeng Jancoeg
              </Text>
              <Text>
                Total :{' '}
                {this.state.total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({warungModal: true});
            }}>
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
              <Icon name="pencil-alt" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({warungModal: true});
            }}>
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
        <FlatGrid
          itemDimension={200}
          data={this.state.dataSnack}
          renderItem={({item, index}) => (
            <View
              style={{
                backgroundColor: '#ffff',
                paddingVertical: 10,
                elevation: 4,
                paddingLeft: 15,
                borderRadius: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>{item.nama}</Text>
              <Text>
                Jumlah :
                {item.qty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
              <Text>
                Harga : Rp.
                {item.hargaSatuan
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
              <Text
                style={{textAlign: 'right', marginRight: 10, marginTop: 10}}>
                Total : Rp.
                {(item.qty * item.hargaSatuan)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
            </View>
          )}
        />
        <Modal isVisible={true}>
          <View style={{flex: 1, backgroundColor: 'white', borderRadius: 10}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                paddingVertical: 10,
              }}>
              Keuntungan Jual
            </Text>
            <FlatGrid
              itemDimension={200}
              data={this.state.dataSnack}
              renderItem={({item, index}) => (
                <View
                  style={{
                    backgroundColor: '#ffff',
                    paddingVertical: 10,
                    elevation: 4,
                    paddingLeft: 15,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#5A74F8',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{item.nama}</Text>

                  <Text>
                    Harga : Rp.
                    {item.hargaSatuan
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#5A74F8',
                        padding: 5,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 25,
                        width: 25,
                        elevation: 5,
                        marginRight: 10,
                      }}>
                      <Icon name="minus" size={14} color="#fff" />
                    </TouchableOpacity>
                    <Text
                      style={{
                        marginRight: 10,
                      }}>
                      {item.qty
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                      Pcs
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#5A74F8',
                        padding: 5,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 25,
                        width: 25,
                        elevation: 5,
                        marginRight: 10,
                      }}>
                      <Icon name="plus" size={14} color="#fff" />
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      textAlign: 'right',
                      marginRight: 10,
                      marginTop: 10,
                    }}>
                    Total : Rp.
                    {(item.qty * item.hargaSatuan)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </Text>
                </View>
              )}
            />
            <View style={{padding: 10}}>
              <Text>Keuntungan Jual : </Text>
              <Text>Total Untung : </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                  flex: 1,
                  margin: 5,
                  elevation: 5,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#5A74F8',
                }}
                onPress={() => this.setState({editWarungModal: false})}>
                <Text style={{color: '#5A74F8'}}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#5A74F8',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                  flex: 1,
                  margin: 5,
                  elevation: 5,
                  borderRadius: 5,
                }}
                onPress={this.editData}>
                <Text style={{color: 'white'}}>Selesai</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
