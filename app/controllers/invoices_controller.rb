class InvoicesController < ApplicationController
    def index
        render json: Invoice.all
    end

    def show 
    invoice = find_invoice
    render json: invoice 
    end


    def create
    invoice = Invoice.create!(invoice_params)
        if invoice.valid?
            render json: inovoice, status: :created
        else 
            render json: {error: 'Validation Error'}
        end

    end

    def destroy
    invoice = find_invoice
    invoice.destroy
    render json: {}

    end

    private

    def find_invoice
        Invoice.find_by(id: params[:id])
    end

    def invoice_params
        params.permit(:transaction_id, :paid)
    end
end
