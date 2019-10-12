import React, { Component } from 'react'
import {PropertyData} from './FetchProperty'

interface AddPropertyDataState {
    loading: boolean;
    propList: Array<any>;
    propData: PropertyData;
}

interface Props {}

export class AdminForm extends Component<Props, AddPropertyDataState> {  
    
    constructor(props: Props){
        super(props)
        this.state={
            loading: true,
            propList:[],
            propData: new PropertyData,
        }
        // this.handleSave = this.handleSave.bind(this)
    }

    componentDidMount(){
        fetch("api/Property/GetPropertiesList")
         .then(response=> response.json() as Promise<Array<any>>)
         .then(data=> {
             this.setState({
                 propList: data,
                 loading: false,
                })
         })
    }


    // private handleSave(){
    //     const data = new FormData();

    //     if (this.state.propData.propertyId){
    //         fetch("api/PropertyData/Edit", {
    //             method: "PUT",

    //         })
    //     }

    // }

    public render(){
        let contents = this.state.loading ?
        <p>Loading...</p> :
        this.renderAddPropertyForm(this.state.propList);
    
        return (
            <div>
                {contents}
            </div>
        )
    }
    
    private renderAddPropertyForm(propData){
    return (
        <div className="admin">
            <h3 className="align-center">To add a property, enter information below</h3>
            <form >
                <div className="flex-row container-padding no-padding-bottom">
                    <div className="flex-col">
                        <label>Property Name</label>
                        <input type="text" name="propName" placeholder="Property Name"></input>
                    </div>
                    <div className="flex-col">
                        <label>Address</label>
                        <input type="text" name="propAddress" placeholder="Address"></input>
                    </div>
                    <div className="flex-col">
                        <label>City</label>
                        <input type="text" name="propCity" placeholder="City"></input>
                    </div>
                    <div className="flex-col">
                        <label>State</label>
                        <input type="text" name="propState" placeholder="State"></input>
                    </div>
                    <div className="flex-col">
                        <label>Zip</label>
                        <input type="text" name="propZip" placeholder="Zip Code"></input>
                    </div>
                    <div className="flex-col">
                        <label>Studio Units Rented</label>
                        <input type="text" name="propStudioUnitsRented" placeholder="Studios rented"></input>
                    </div>
                    <div className="flex-col">
                        <label>Studio Units</label>
                        <input type="text" name="propStudioUnits" placeholder="Studios"></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedroom Units Rented</label>
                        <input type="text" name="propOneBedRoomUnitsRented" placeholder="One bedrooms rented"></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedroom Units</label>
                        <input type="text" name="propOneBedRoomUnits" placeholder="One bedrooms"></input>
                    </div>
                    <div className="flex-col fill-width">
                        <label>Cats Allowed</label>
                        <select name="propCatsAllowed">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="flex-col fill-width">
                        <label>Dogs Allowed</label>
                        <select name="propDogsAllowed">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="flex-col fill-width">
                        <label className="display-block">Image</label>
                        <input name="propertyImage" placeholder="image URL"></input>
                    </div>
                </div>
                <div className="flex-col">
                    <label className="display-block">Property Description</label>
                    <textarea name="propertyDescription" placeholder="Property Description"></textarea>
                </div>
                <button type="submit" className="btn-submit">Add Property</button>
            </form>
        </div>
    )
    }
}