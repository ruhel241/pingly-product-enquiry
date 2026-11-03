<?php

namespace WPCreativeIdeaProductEnquiry\Models;

class WPCreativeIdeaProductEnquiry {

    protected $table = 'wpcipe_product_enquiry';
   
    public function getDetails($request) {
        $search       = sanitize_text_field($request['search']);
        $currentPage  = sanitize_text_field($request['current_page']);
        $perPage      = sanitize_text_field($request['per_page']);
        $offset       = $perPage * ($currentPage - 1);

        $detailsQuery = WPCIPE_Query()->table($this->table)
                    ->orderBy('id', 'DESC')
                    ->offset($offset)
                    ->limit($perPage);

        if ($search) {
            $detailsQuery->where(function ($query) use ($search) {
                $query->where('id', 'LIKE', '%' . $search . '%')
                    ->orWhere('name', 'LIKE', '%' . $search . '%')
                    ->orWhere('email', 'LIKE', '%' . $search . '%')
                    ->orWhere('enquiry', 'LIKE', '%' . $search . '%')
                    ->orWhere('type', 'LIKE', '%' . $search . '%')
                    ->orWhere('status', 'LIKE', '%' . $search . '%')
                    ->orWhere('subscribe', 'LIKE', '%' . $search . '%');
                });
        }

        $details =  $detailsQuery->get();

        $total = $detailsQuery->count();

        foreach ($details as $detail) {
           $detail->human_created_at = human_time_diff(strtotime($detail->created_at), time()) . ' ago';
        }

        $lastPage = (int) ceil($total / $perPage);

        $data = [
            'details'       => $details,
            'total'         => $total,
            'last_page'     => $lastPage,
            'current_page'  => intval($currentPage),
        ];

        return $data;
    }

    public function getDetail($id) {
        $id = sanitize_text_field($id);

        $detail = WPCIPE_Query()->table($this->table)->where('id', $id)->first();

        return $detail;
    }

    public function deleteInfo($detailsIds) {
        $details = WPCIPE_Query()->table($this->table)->whereIn('id', $detailsIds)->get();

        foreach ($details as $detail) {
            WPCIPE_Query()->table($this->table)->where('id', $detail->id)->delete();
        }
    }

    public function insertGetId($data) {

        $save = WPCIPE_Query()->table($this->table)->insert($data);

        return $save;
    }

    public function update($id, $data) {

       $update =  WPCIPE_Query()->table($this->table)
                    ->where('id', $id)
                    ->update($data);
       
        return $update; 
    }
}