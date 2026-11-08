<?php

namespace PinglyProductEnquiry\Models;

class PinglyProductEnquiry {

    protected $table = 'pingly_product_enquiry';
   
    public function getDetails($request) {
        $search      = sanitize_text_field($request['search'] ?? '');
        $status      = sanitize_text_field($request['status'] ?? '');
        $currentPage = max(1, (int) ($request['current_page'] ?? 1));
        $perPage     = min(100, max(1, (int) ($request['per_page'] ?? 10)));
        $offset      = $perPage * ($currentPage - 1);

        $detailsQuery = PINGLY_Query()->table($this->table)
                    ->orderBy('id', 'DESC')
                    ->offset($offset)
                    ->limit($perPage);

        if ($search) {
            $like = '%' . $search . '%';

            $detailsQuery->where(function ($query) use ($like) {
                $query->where('id', 'LIKE', $like)
                    ->orWhere('name', 'LIKE', $like)
                    ->orWhere('email', 'LIKE', $like)
                    ->orWhere('enquiry', 'LIKE', $like)
                    ->orWhere('type', 'LIKE', $like)
                    ->orWhere('status', 'LIKE', $like)
                    ->orWhere('subscribe', 'LIKE', $like);
            });
        }

        if ($status) {
            $detailsQuery->where('status', '=', $status);
        }

        $details = $detailsQuery->get();
        $total   = $detailsQuery->count();

        foreach ($details as $detail) {
            $detail->human_created_at = sprintf(
                /* translators: %s: Human-readable time difference, e.g. "2 hours". */
                __('%s ago', 'pingly-product-enquiry'),
                human_time_diff(strtotime($detail->created_at), time())
            );
        }

        return [
            'details'      => $details,
            'total'        => $total,
            'last_page'    => (int) ceil($total / $perPage),
            'current_page' => $currentPage,
        ];
    }

    public function getDetail($id) {
        $id = sanitize_text_field($id);

        $detail = PINGLY_Query()->table($this->table)->where('id', $id)->first();

        return $detail;
    }

    public function deleteInfo($detailsIds) {
        $details = PINGLY_Query()->table($this->table)->whereIn('id', $detailsIds)->get();

        foreach ($details as $detail) {
            PINGLY_Query()->table($this->table)->where('id', $detail->id)->delete();
        }
    }

    public function insertGetId($data) {

        $save = PINGLY_Query()->table($this->table)->insert($data);

        return $save;
    }

    public function update($id, $data) {

       $update =  PINGLY_Query()->table($this->table)
                    ->where('id', $id)
                    ->update($data);
       
        return $update; 
    }
}